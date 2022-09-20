import "./App.css";
import PersonIcon from "@mui/icons-material/Person";
import { Fab, Fade } from "@mui/material";
import { useState } from "react";
import VirtualAssistant from "./VirtualAssistant";
function App() {
  const [clickedAssistant, setClickedAssistant] = useState(false);
  const onClickVirtualAssistant = () => {
    setClickedAssistant(true);
  };
  const onCloseAssistant = () => {
    setClickedAssistant(false);
  };
  return (
    <div className="App">
      <VirtualAssistant {...{ clickedAssistant, onCloseAssistant }} />
      <Fade in={!clickedAssistant}>
        <Fab
          onClick={onClickVirtualAssistant}
          className="trigger-assistant"
          color="secondary"
          aria-label="add"
        >
          <PersonIcon />
        </Fab>
      </Fade>
    </div>
  );
}

export default App;
