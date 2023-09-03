import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import { LoadingContext } from "./context/LoadingProvider";
import NavBar from "./components/Navigation/NavBar";
import PageLayout from "./routes/PageLayout";

function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <>
      <BrowserRouter>
        <div className={styles["app"]}>
          <header className={styles["app__header"]}>
            <NavBar />
          </header>

          <main className={styles["app___main"]}>
            <PageLayout />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
