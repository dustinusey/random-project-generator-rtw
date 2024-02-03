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
        className="max-w-[250px] px-6 py-4 font-normal whitespace-nowrap text-gray-500 dark:text-white"
        scope="row"
      >
        <p className="duration-300 shorten2">{props.projectName}</p>
      </th>
      <td className="px-6 py-4 max-w-fit">
        <p className="shorten1">{props.createdAt}</p>
      </td>

      <td className="px-3 pr-0 py-4 w-fit">
        <StatusDropdown projectid={props.id} status={props.status} />
      </td>
      <td className="px-6 py-4 max-w-[150px]">
        <p className="duration-300 text-sky-400  shorten1" href="#">
          {props.github}
        </p>
      </td>
    </tr>
  );
}

// Project.propTypes = {
//     id: PropTypes.string.isRequired,
//   };
