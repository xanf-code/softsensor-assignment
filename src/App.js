import Layout from "./layout";
import Store from "./pages/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Switch> */}
        <Route path="/" exact>
          <Layout />
        </Route>
        <Route path="/cart" exact>
          <Store />
        </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
