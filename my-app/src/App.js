import { useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const handletoggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#40404b";
      showAlert("Dark mode has been activated successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated successfully", "success");
    }
  };

  // const handletoggleMode2 = () => {
  //   if (mode === "light" || mode === "dark") {
  //     setMode("success");
  //     document.body.style.backgroundColor = "#1d764c";
  //     showAlert("Green mode has been activated successfully", "success");
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about_text="About TextUtils"
          mode={mode}
          toggleMode={handletoggleMode}
        />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/about"
              element={<AboutUs mode={mode} />}
            ></Route>
            <Route
              exact
              path="/home"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
  // return <Navbar />;
}

export default App;
