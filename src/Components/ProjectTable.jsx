import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AppState } from "../App";
import Alert from "./Alerts/Alert";
import Project from "./Project";
import Spinner from "./Spinner";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";

const supabase = createClient(
  import.meta.env.VITE_SB_URL,
  import.meta.env.VITE_SB_KEY
);

export default function ProjectTable() {
  const {
    theme,
    alert,
    loading,
    isLoading,
    projects,
    setProjects,
    currentPage,
    setCurrentPage,
    setAlert,
  } = useContext(AppState);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const newProjects = await getProjects();
    setProjects(newProjects.reverse());
    isLoading(false);
  };

  async function getProjects() {
    isLoading(true);
    const { data } = await supabase.from("projects").select();

    setCurrentPage(1);
    return data;
  }

  async function generateNewProject() {
    isLoading(true);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        max_tokens: 1000,
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "user",
            content: `I want to you to return a JSON object of an array named 'frontendProjects' of random, quick, beginner friendly frontend project ideas. ONLY return a JSON object. Please exclude any of these projects: Portfolio websites, Pomodoro timers, calculators, calendars or any of these: ${projects.map(
              (proj) => proj.name
            )}`,
          },
        ],
      },
      { headers: { Authorization: import.meta.env.VITE_OPENAI_KEY } }
    );

    let resStrings = response.data.choices[0].message.content;
    let projectList = [JSON.parse(resStrings)][0].frontendProjects;

    let randomProject =
      projectList[Math.floor(Math.random() * projectList.length)];

    try {
      await supabase.from("projects").insert([
        {
          name: randomProject,
          created_at: new Date(),
          status: "In Progress",
          github_url: "",
        },
      ]);
      await fetchProjects();
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }

  function handleNewProject() {
    let inProgress = 0;
    projects.forEach((project) => {
      if (project.status === "In Progress") {
        inProgress += 1;
      }
    });

    if (inProgress < 1) {
      generateNewProject();
    } else {
      setAlert("error");
    }

    // generateNewProject();
  }

  return (
    <div className={!theme ? "dark" : ""}>
      {alert && <Alert />}
      <div
        className={`project-table mx-auto my-auto flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-700 duration-300`}
      >
        <div className="wrapper max-w-[900px] w-[80%]">
          {/* table header */}
          <TableHeader handleNewProject={handleNewProject} />

          {/* loader/spinner */}
          <div className="loading-container m-auto">
            {loading && <Spinner />}
          </div>

          {/* project table */}
          <div className="relative shadow-md sm:rounded-lg">
            <table className="overflow-hidden rounded-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              {/* table tutles */}
              <thead className=" duration-300 text-md text-gray-600 uppercase bg-gray-50 dark:bg-gray-900  dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-7">
                    Project Title
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-7">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-7">
                    GitHub
                  </th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {/* only render the projects based off the currentPage and only wanting to show 5 per page */}
                {projects
                  .slice((currentPage - 1) * 5, currentPage * 5)
                  .map((project) => {
                    const id = project.id.toString();
                    const date = new Date(project.created_at);
                    const formattedDate = `${date.toLocaleString("default", {
                      month: "long",
                    })} ${date.getDate()}, ${date.getFullYear()}`;
                    return (
                      <Project
                        key={project.id}
                        id={id}
                        project={project}
                        projectName={project.name}
                        createdAt={formattedDate}
                        status={project.status}
                        github={project.github_url}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* table paginagation */}
          <TablePagination />
        </div>
      </div>
    </div>
  );
}
