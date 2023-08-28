import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";

function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      <BrowserRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}></header>
        </div>
      </BrowserRouter>
      <h1>Space Travel</h1>
    </>
  );
}

export default App;
