import './App.css'
import {HelloWorld} from "../../bitdev-test-lib/my-scope/hello-world";
import {HelloWorld2} from "../../bitdev-test-lib/my-scope2/hello-world2";

function App() {

  return (
    <>
      <HelloWorld>Vite + React scope1</HelloWorld>
        <HelloWorld2>Vite + React scope2</HelloWorld2>
    </>
  )
}

export default App
