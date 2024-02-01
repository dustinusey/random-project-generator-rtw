import React, { useState } from "react";
import ProjectTable from "./Components/ProjectTable";

export const AppState = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loading, isLoading] = useState(false);

  return (
    <AppState.Provider
      value={{ theme, setTheme, alert, setAlert, loading, isLoading }}
    >
      <ProjectTable />
    </AppState.Provider>
  );
}
