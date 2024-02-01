
import { useState } from 'react';
import ProjectTable from './Components/ProjectTable';

export default function App() {


  const [theme, setTheme] = useState(false);




  return (
    <ProjectTable theme={theme} setTheme={setTheme} />
  )
}


