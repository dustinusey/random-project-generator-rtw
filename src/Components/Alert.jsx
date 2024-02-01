import { useContext } from "react";
import { AppState } from "../App";

export default function Alert() {
  const { setAlert } = useContext(AppState);

  return (
    <div
      onClick={() => setAlert(false)}
      className="z-50 bg-gray-500 bg-opacity-80 absolute h-[100vh] w-full overlay flex justify-center items-center"
    >
      <div
        tabIndex="-1"
        className="component-centered overflow-y-auto overflow-x-hidden z-50 justify-center items-center max-h-full"
      >
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <button
              onClick={() => setAlert(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="p-4 md:p-5 text-center text-gray-700 dark:text-gray-200">
              <svg
                className="mx-auto mb-4 text-red-400 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className=" max-w-[350px] block text-sm">
                You may only generate a new random project if you currently
                don't have any &quot;In Progress&quot; projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
