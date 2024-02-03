// import PropTypes from 'prop-types';
import React, { useContext, useState } from "react";
import { AppState } from "../App";

export default function StatusDropdown(props) {
  const { setAlert } = useContext(AppState);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  function handleCompleteModal() {
    setIsOpen(false);
    setAlert("complete");
  }

  function handleAbandonModal() {
    setIsOpen(false);
    setAlert("abandon");
  }
  return (
    <>
      {props.status !== "In Progress" ? (
        <p
          onClick={toggleDropdown}
          className={`${
            props.status === "abandoned"
              ? "bg-red-500 dark:bg-red-500"
              : "bg-gray-300"
          } text-white  bg-gray-600 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-500   dark:focus:ring-gray-500" type="button`}
        >
          {props.status === "abandoned" ? "Abandoned" : "Completed"}

          {props.stats === "abandoned" ? (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
        </p>
      ) : (
        <div className="status-dropdown max-w-fit">
          <button
            onClick={toggleDropdown}
            id="dropdownDefaultButton"
            className="text-white bg-sky-600 hover:bg-sky-700 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-sky-600 dark:hover:bg-sky-700  dark:focus:ring-gray-500"
            type="button"
          >
            In Progress
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="absolute mt-3">
            <div
              id={`dropdown_${props.projectid}`}
              className={`z-10 ${
                isOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-950 relative`}
            >
              <ul
                className="p-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="duration-300 disabled rounded-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    In Progress
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleCompleteModal();
                    }}
                    href="#"
                    className="duration-300 rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Complete
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleAbandonModal();
                    }}
                    href="#"
                    className=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Abandon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// StatusDropdown.propTypes = {
//     id:PropTypes.string.isRequired
// }
