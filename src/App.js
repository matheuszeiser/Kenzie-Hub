import Routes from "./Routes";
import GlobalStyle from "./Styles/global";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const { user, setUser } = useState({});
  return (
    <div className="app">
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
