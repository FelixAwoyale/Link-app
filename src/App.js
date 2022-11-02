import "./App.css";
import Links from "./component/Links";
import Nav from "./component/Nav";
import Footers from "./component/Footers";
import ShareLink from "./component/ShareLink";
import "bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ShareLink />
        <Nav />
        <Links />
        <Footers />
      </div>
    </div>
  );
}

export default App;
