import Branch from "./components/Branch/Branch";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/Pages/Pages";
import "./index.css"
const App = () => {
  return (
    <div>
      <Navbar />
      <Branch />
      <MainPage />
    </div>
  );
}

export default App;
