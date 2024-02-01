
import { useState } from 'react';
import Alert from './Components/Alert';
import ProjectTable from './Components/ProjectTable';

export default function App() {


  const [theme, setTheme] = useState(false);
  const [alert, showAlert] = useState(false);




  return (
    <>
    { alert ? <Alert /> : <ProjectTable theme={theme} setTheme={setTheme} /> }
    </>
  )
}


