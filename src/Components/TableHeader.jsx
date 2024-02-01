import 'flowbite';
import PropTypes from 'prop-types';

export default function TableHeader({theme, setTheme}) {
    return (
        <div className="flex justify-between items-center mb-4 p-4 bg-transparent">
            <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-3xl lg:text-3xl dark:text-white">Your Projects</h1>
            <button data-popover-target="popover-default" type="button" className="transition duration-100 ease-in-out text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-auto mr-[2rem] mb-2 dark:bg-teal-600 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-teal-800">New Random Project</button>
            
            {/* popover component */}
            <div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Warning</h3>
                </div>
                <div className="px-3 py-2">
                    <p>You may only generate a new random project if you currently don&apos;t have any &quot;In Progress&quot; projects.</p>
                </div>
                <div data-popper-arrow></div>
            </div>

            {/* theme icon */}
            { !theme ? 
                <svg onClick={() => setTheme(!theme) } className="cursor-pointer mb-[.33rem] w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"/>
                </svg> 
            :  
                <svg onClick={() => setTheme(!theme) } className="cursor-pointer mb-[.33rem] w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                </svg>
            }
        </div>
    )
}

TableHeader.propTypes = {
    setTheme: PropTypes.func.isRequired,
    theme: PropTypes.bool.isRequired
  };




    
