import { useEffect, useState } from "react";
import styles from "./styles.module.css";

function App() {
  const [number, setNumber] = useState<string | undefined>("");

  function checkNumber(value: string): void {
    console.log(value);
    setNumber((prev) => {
      if (value === "," || value === "-,") {
        return prev;
      }
      if (value.match(/^-?\d*\,?\d*$/)) {
        return value;
      }
      return prev;
    });
  }
  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={number}
        onChange={(e) => checkNumber(e.target.value)}
      />
    </div>
  );
}

export default App;
