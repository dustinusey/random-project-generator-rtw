
import React, { useState } from 'react';
import Alert from './Components/Alert';
import ProjectTable from './Components/ProjectTable';
import Test from './Components/Test';

export const AppState = React.createContext()

export default function App() {

  const [theme, setTheme] = useState(false);
  const [alert, showAlert] = useState(false);

  return (
    <AppState.Provider value={{ theme, setTheme }}>
      {alert ? <Alert /> : <ProjectTable />}
      {/* <Test /> */}
    </AppState.Provider>
  )
}


