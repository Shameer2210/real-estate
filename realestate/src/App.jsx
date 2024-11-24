import Navbar from "./components/navbar/Nav";
import styles from "./App.module.css";
import Hero from "./components/hero/Hero";
const App = () => {
  return (
    <div>
      <div className={styles.desktop1}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
