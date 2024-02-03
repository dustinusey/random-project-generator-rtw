import PropTypes from "prop-types";
import { useContext } from "react";
import { AppState } from "../App";
import StatusDropdown from "./StatusDropdown";

export default function Project(props) {
  const { setCurrentProject } = useContext(AppState);
  return (
    <tr
      onClick={() => {
        setCurrentProject(props.project);
      }}
      className="duration-300 odd:bg-white even:bg-gray-50 even:dark:bg-gray-900 odd:dark:bg-gray-800 dark:border-gray-900 border-b "
    >
      <th
        className=" w-fit px-6 py-4 font-normal whitespace-nowrap text-gray-500 dark:text-white"
        scope="row"
      >
        <p className="duration-300 shorten2">{props.projectName}</p>
      </th>
      <td className="min-w-[200px] px-6 py-4 max-w-fit">
        <p className="shorten1">{props.createdAt}</p>
      </td>

      <td className="w-[165px] px-3 pr-0 py-4">
        <StatusDropdown projectid={props.id} status={props.status} />
      </td>
      <td className="min-w-[250px] px-6 py-4">
        <div className="flex flex-start items-center">
          <svg
            className="mr-2 w-5 h-5 text-gray-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
              clipRule="evenodd"
            />
          </svg>

          <a
            className="duration-300 text-sky-400 hover:text-sky-500 shorten1"
            href={`https://www.github.com/dustinusey/${props.github}`}
          >
            {props.github}
          </a>
        </div>
      </td>
    </tr>
  );
}

// Project.propTypes = {
//     id: PropTypes.string.isRequired,
//   };
