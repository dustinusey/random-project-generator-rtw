import { useContext } from "react";
import { AppState } from "../App";

export default function TablePagination() {
  const { projects, setCurrentPage, currentPage } = useContext(AppState);

  const pagination = {
    currentPage: 1,
    totalPages: projects.length / 5,
    totalItems: projects.length - 1,
    itemsPerPage: 5,
  };

  return (
    <nav
      className="flex item-center justify-center p-10"
      aria-label="Page navigation example"
    >
      <ul className="flex items-center -space-x-px h-10 text-base">
        {/* previous arrow */}
        <li
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        >
          <a
            href="#"
            className="duration-300 mr-3 flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </a>
        </li>

        {/* page numbers */}
        {projects.map((project, index) => {
          if (index % pagination.itemsPerPage === 0) {
            return (
              <li
                onClick={() =>
                  setCurrentPage(index / pagination.itemsPerPage + 1)
                }
                key={index}
              >
                <a
                  href="#"
                  className={
                    currentPage === index / pagination.itemsPerPage + 1
                      ? "cursor-default duration-300 flex items-center justify-center px-4 h-10 leading-tight text-white bg-slate-400 bg-opacity-50 rounded-lg  hover:text-white dark:bg-gray-900   dark:text-white  dark:hover:text-white mx-0.5"
                      : "duration-300 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-opacity-50 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white mx-0.5"
                  }
                >
                  {index / pagination.itemsPerPage + 1}
                </a>
              </li>
            );
          }
        })}

        {/* next arrow */}
        <li
          onClick={() => {
            currentPage < pagination.totalPages &&
              setCurrentPage(currentPage + 1);
          }}
        >
          <a
            href="#"
            className="duration-300 ml-3 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white  rounded-lg  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
