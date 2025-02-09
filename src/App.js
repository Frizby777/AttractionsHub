import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";
// export class App extends React.Component {
//   constructor() { }

//   componentDidMount() {
//     //render1();
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Home />
//         {/* <Projects /> */}
//         <Footer />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
