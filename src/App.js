
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery.tsx";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMedScreen = useMediaQuery("(min-width: 1060px)");


  return (
    <div className="app bg-blue-950">
      {/* <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> */}
    </div>
  );
}

export default App;
