import React, { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";

export const AppState = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, isLoading] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // initially sets theme in LS to false
  useEffect(() => {
    if (localStorage.getItem("darkTheme") === null) {
      localStorage.setItem("darkTheme", false);
    }
    setDarkTheme(JSON.parse(localStorage.getItem("darkTheme")));
  }, []);

  return (
    <AppState.Provider
      value={{
        darkTheme,
        setDarkTheme,
        alert,
        setAlert,
        loading,
        isLoading,
        currentProject,
        setCurrentProject,
        projects,
        setProjects,
        currentPage,
        setCurrentPage,
      }}
    >
      <ProjectTable />
    </AppState.Provider>
  );
}
