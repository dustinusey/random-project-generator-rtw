import { useContext } from "react";
import { AppState } from "../../App";

export default function Error() {
  const { setAlert } = useContext(AppState);

  const alertData = {
    header: "Error",
    body: `You may only generate a new random project if you currently don't have any "In Progress" projects.`,
    CTA: "Stop being dumb",
  };

  return (
    <>
      {/* modal start */}
      <div className=" px-5 py-3 relative bg-white rounded-lg shadow dark:bg-gray-800">
        {/* modal header */}
        <div className="flex items-center justify-between p-4 md:p-5">
          <h3 className="text-md font-semibold text-red-400 dark:text-white">
            {`${alertData.header.toUpperCase()}`}
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
        </div>

        {/* modal footer */}
        <div className="flex items-center px-4 pb-4 pt-0">
          <button
            onClick={() => setAlert(false)}
            data-modal-hide="default-modal"
            type="button"
            className="w-full duration-300 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {alertData.CTA}
          </button>
        </div>
      </div>
    </>
  );
}
