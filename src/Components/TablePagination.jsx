export default function TablePagination() {
    return (
            <nav className="duration-300 p-10 flex justify-center" aria-label="Table page navigation">
                <ul className="inline-flex -space-x-px text-sm duration-700">
                    <li>
                        {/* previous */}
                        <a href="#" className="duration-200 flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="duration-200 flex items-center justify-center px-3 h-8 text-purple-600 border border-gray-300 bg-slate-50 hover:bg-slate-100 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                    </li>
                    <li>
                        {/* next */}
                        <a href="#" className="duration-200 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
    )
}