import React, { useEffect, useState } from "react";
import ProjectTable from "./Components/ProjectTable";

export const AppState = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, isLoading] = useState(false);
  const [currentProject, setCurrentProject] = useState("");
  const [projects, setProjects] = useState([]);

  // initially sets theme in LS to false
  useEffect(() => {
    !localStorage.theme
      ? localStorage.setItem("theme", theme)
      : setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <AppState.Provider
      value={{
        theme,
        setTheme,
        alert,
        setAlert,
        loading,
        isLoading,
        currentProject,
        setCurrentProject,
        projects,
        setProjects,
      }}
    >
      <ProjectTable />
    </AppState.Provider>
  );
}
