
import React, { useState } from 'react';
import Alert from './Components/Alert';
import ProjectTable from './Components/ProjectTable';

export const AppState = React.createContext()

export default function App() {

  const [theme, setTheme] = useState(false);
  const [alert, showAlert] = useState(false);

  return (
    <AppState.Provider value={{ theme, setTheme }}>
      {alert ? <Alert /> : <ProjectTable />}
    </AppState.Provider>
  )
}


