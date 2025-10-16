import Branch from "./components/Branch/Branch";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/Pages/Pages";
import "./index.css"
const App = () => {
  return (
    <div>
      <Navbar />
      <Branch />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
