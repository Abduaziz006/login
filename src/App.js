import Login_goolge_facebook from "./components/Login_goolge_facebook";

import Well from "./components/Well";
import Pole_input from "./components/Pole_input";
import Remem from "./components/Remem";
import Login_btn from "./components/Login_btn";

function App() {
  return (
    <div className="App">
      <div className="container">
          <Well />
        <div className="container-wellcome">
          <h1 className="well">Welcome to</h1>
          <h1 className="uni color-h2">Uni42 Academy</h1>

          <Login_goolge_facebook />

          <Pole_input />
          <Remem />
          <Login_btn />
        </div>
      </div>
    </div>
  );
}

export default App;