import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react";
import Footer from "./components/Footer";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="tg-miniapp">
      <Header />
      <AppRouter />
      <Footer />
      <div id="notification-container"></div>
    </BrowserRouter>
  );
}

export default observer(App);
