import React, { useState, useRef } from "react";

import styles from "../styles/Home.module.css";

function Scan() {
  const [data, setData] = useState("No result");

  return (
    <div className={styles.container}>
      <div className={styles.container}>

        <p>{data}</p>

      </div>
    </div>
  );
}

export default Scan;
