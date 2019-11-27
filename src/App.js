import React from "react";
import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
