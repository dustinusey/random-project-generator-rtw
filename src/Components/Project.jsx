
import PropTypes from 'prop-types';
import StatusDropdown from './StatusDropdown';

export default function Project(props) {
    return (
        <tr className=" duration-300 odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700">
            <th scope="row" className="max-w-[250px] px-6 py-4 font-normal text-gray-500 whitespace-nowrap dark:text-white">
                <p className="duration-300 shorten2">Build a Todo App with subtasks in React</p>
            </th>
            <td className="px-6 py-4 max-w-fit">
                <p className="shorten1">January 31, 2024</p>
            </td>


            <td className="px-6 py-4 max-w-fit">
                <StatusDropdown projectTitle={props.projectTitle}/>
            </td>
            <td className="px-6 py-4 max-w-[150px]">
                <p className="duration-300 text-purple-400  shorten1" href="#">https://www.teamtreehouasdfasdfasdfse.com</p>
            </td>
        </tr>
    )
}


Project.propTypes = {
    projectTitle: PropTypes.string.isRequired,
  };