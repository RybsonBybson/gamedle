import { useState } from "react";
import { createRoot } from "react-dom/client";
import { GlobalContext } from "./context/contexts";
import { ToastContainer } from "react-toastify";
import Covers from "./pages/covers";
import "./index.css";

function Main() {
  const [site, setSite] = useState("home");

  return (
    <GlobalContext value={{ site, setSite }}>
      <ToastContainer />
      {site === "home" && <Covers />}
    </GlobalContext>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
