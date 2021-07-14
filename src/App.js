import './App.css' 

/* imports dos componentes*/
import { TelaDeMensagem } from "./components/TelaDeMensagem";
import { Form } from "./components/Form";

function App() {

  return (
    <main className="main">
      <TelaDeMensagem class="main-tela"/>
      <Form />
    </main>
  );
}

export default App;
