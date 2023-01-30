import "./App.css";
import Galleries from "./components/Galleries";
import Grid2 from "@mui/material/Unstable_Grid2";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Grid2 container spacing={0}>
        <Grid2 xs={9} height="100vh" overflow="scroll">
          <Galleries />
        </Grid2>
        <Grid2 xs={3}>
          <AboutMe />
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
