import PropTypes from 'prop-types';


export default function StatusDropdown(props) {
    return (
        <div className="status-dropdown max-w-fit">
            <button id="dropdownDefaultButton" data-dropdown-toggle={`dropdown_${props.projectTitle}`} className="text-white bg-gray-600 hover:bg-gray-700 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600  dark:focus:ring-gray-500" type="button">
                                        
                In Progress
                
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>

            </button>

            <div id={`dropdown_${props.projectTitle}`} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900">
                <ul className="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li className="disabled rounded-lg">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">In Progress</a>
                </li>
                <li>
                    <a href="#" className=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Complete</a>
                </li>
                <li>
                    <a href="#" className=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Abandon</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

StatusDropdown.propTypes = {
    projectTitle: PropTypes.string.isRequired
}