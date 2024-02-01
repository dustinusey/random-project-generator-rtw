export default function GenerateProjectBtn(props) {
    return (
        <>
            <button onClick={() => {}} data-popover-target="popover-default" type="button" className="transition ease-in-out text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-auto mr-[2rem] mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">New Random Project</button>
            
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
        </>
    )
}