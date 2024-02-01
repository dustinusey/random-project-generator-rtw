import PropTypes from 'prop-types';
import Project from './Project';
import TableHeader from './TableHeader';
import TablePagination from './TablePagination';
import Tabs from './Tabs';


export default function ProjectTable({theme, setTheme}) {

    return (
        <div className={theme ? "dark " : ""}>
            <div className={"project-table mx-auto my-auto flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-gray-800 duration-300"}>
                <div className="wrapper max-w-[900px] w-[80%]">
                    
                    <TableHeader setTheme={setTheme} theme={theme} />
                    

                    <Tabs />

                    <div className="relative shadow-md sm:rounded-lg">    
                        <table className="overflow-hidden rounded-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className=" duration-300 text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-7">
                                        Project Title
                                    </th>
                                    <th scope="col" className="px-6 py-7">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-7">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-7">
                                        GitHub
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                

                            <Project projectTitle={"one"}/>
                            <Project projectTitle={"two"}/>
                                
                            </tbody>
                        </table>
                    </div>
                    <TablePagination />
                </div>
            </div>
        </div>
    )
}

ProjectTable.propTypes = {
    setTheme: PropTypes.func.isRequired,
    theme: PropTypes.bool.isRequired
  };