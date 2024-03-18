import { createClient } from "@supabase/supabase-js";
import { useContext, useRef } from "react";
import { AppState } from "../../App";
import Spinner from "../Spinner";

export default function Complete() {
  const { setAlert, currentProject, setProjects, isLoading } =
    useContext(AppState);

  const URLInput = useRef("");
  const messages = [
    "Wow, you finished a project. Groundbreaking.",
    "Congratulations, you've successfully pressed some keys. Impressive.",
    "Project complete, because we all had our doubts.",
    "A round of applause for conquering that project. Such a Herculean task.",
    "Amazing job on that project! It's almost like you knew what you were doing.",
    "Congratulations on finishing the project. The world will never be the same.",
    "Project complete? I had my doubts, but you proved me wrong.",
    "A standing ovation for the mastermind who finished the project. Unbelievable.",
    "Round of applause for saving the day with your coding expertise. Seriously.",
    "Project done? Well, I'm sure the world was waiting with bated breath.",
  ];

  const alertData = {
    header: "Ready to complete?",
    body: messages[Math.floor(Math.random() * messages.length)],
    CTA: "Complete Project",
    cancel: "Not Done Yet",
  };

  const supabase = createClient(
    import.meta.env.VITE_SB_URL,
    import.meta.env.VITE_SB_KEY
  );

  async function updateProjectStatus(updatedStatus, project) {
    isLoading(true);

    setAlert(false);
    await supabase
      .from("random-project-generator")
      .update({
        status: updatedStatus,
        github_url: URLInput.current,
      })
      .match({ id: project.id });

    const newProjects = await getProjects();
    setProjects(newProjects.reverse());
    setAlert(false);
    isLoading(false);
  }

  async function getProjects() {
    const { data } = await supabase.from("random-project-generator").select();
    return data;
  }
  return (
    <>
      {/* modal start */}
      <div className=" px-5 py-3 relative bg-white rounded-lg shadow dark:bg-gray-800">
        {/* modal header */}
        <div className="flex items-center justify-between p-4 md:p-5">
          <h3 className="text-xl font-semibold text-gray-500 dark:text-white">
            {alertData.header}
          </h3>
          <button
            onClick={() => setAlert(false)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* modal body */}
        <div className="p-4 md:p-5 space-y-4">
          <p className="italic max-w-[350px] text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-10">
            {alertData.body}
          </p>

          <p className="text-sm ml-1 leading-relaxed text-gray-500 dark:text-gray-400">
            Drop the GitHub repo for the project to complete
          </p>
          <input
            onKeyUp={(e) => {
              URLInput.current = e.target.value;
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            placeholder="https://www.github.com/..."
            required
          />
        </div>
        {/* modal footer */}
        <div className="flex items-center px-4 pb-4 pt-0">
          <button
            onClick={() => {
              updateProjectStatus("complete", currentProject);
            }}
            data-modal-hide="default-modal"
            type="button"
            className="duration-300 text-white bg-emerald-500 hover:bg-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:ring-4 focus:outline- dark:focus:ring-emerald-500 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text max-h-[40px] focus:z-10"
          >
            {alertData.CTA}
          </button>
          <button
            onClick={() => setAlert(false)}
            data-modal-hide="default-modal"
            type="button"
            className="duration-300 ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {alertData.cancel}
          </button>
        </div>
      </div>
    </>
  );
}
