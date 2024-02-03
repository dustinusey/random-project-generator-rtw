import { createClient } from "@supabase/supabase-js";
import { useContext } from "react";
import { AppState } from "../../App";

export default function Abandon() {
  const { setAlert, currentProject, setProjects } = useContext(AppState);

  const messages = [
    "Oops, project not quite there. Better luck next time, maybe?",
    "Congratulations on the spectacular failure. Nailed it!",
    "Well, that project went down in flames. Time for Plan B, or C, or...",
    "A valiant effort on that project. I'm sure failure was the goal, right?",
    "Project status: Epic fail achieved. Back to the drawing board!",
    "Failure unlocked! Who knew it could be so satisfying?",
    "Round of applause for the project that went south. Bravo!",
    "Fantastic attempt at a project. Failure suits you, clearly.",
    "Oopsie daisy, project not successful. Color me shocked!",
    "Mission: Failure accomplished. Better luck next coding adventure!",
  ];

  const alertData = {
    header: "Need to abandon?",
    CTA: "Abandon Project",
    body: messages[Math.floor(Math.random() * messages.length)],
    cancel: "Keep Working",
  };

  const supabase = createClient(
    import.meta.env.VITE_SB_URL,
    import.meta.env.VITE_SB_KEY
  );

  async function updateProjectStatus(updatedStatus, project) {
    await supabase
      .from("projects")
      .update({ status: updatedStatus })
      .match({ id: project.id });

    const newProjects = await getProjects();
    setProjects(newProjects.reverse());
    setAlert(false);
  }

  async function getProjects() {
    const { data } = await supabase.from("projects").select();
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
          <p className="italic max-w-[350px] text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {alertData.body}
          </p>
        </div>
        {/* modal footer */}
        <div className="flex items-center px-4 pb-4 pt-0">
          <button
            onClick={() => {
              updateProjectStatus("abandoned", currentProject);
            }}
            data-modal-hide="default-modal"
            type="button"
            className="duration-300 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-red-400"
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
