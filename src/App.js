import "./App.scss";
import Main from "./companents/Main/Main";
import Header from "./companents/Header/Header";
import Navbar from "./companents/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
