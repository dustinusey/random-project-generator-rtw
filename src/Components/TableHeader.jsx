import "flowbite";
import { useContext } from "react";
import { AppState } from "../App";
import GenerateProjectBtn from "./GenerateProjectBtn";

export default function TableHeader(props) {
  const { theme, setTheme } = useContext(AppState);

  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-transparent">
      <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-3xl dark:text-white">
        Your Projects
      </h1>

      <GenerateProjectBtn handleNewProject={props.handleNewProject} />

      {/* theme icon */}
      {!theme ? (
        <svg
          onClick={() => setTheme(!theme)}
          className="cursor-pointer mb-[.33rem] w-6 h-6 text-gray-800 dark:text-white"
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
            d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme(!theme)}
          className="cursor-pointer mb-[.33rem] w-6 h-6 text-gray-800 dark:text-white"
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
            d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </svg>
      )}
    </div>
  );
}
