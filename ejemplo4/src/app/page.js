"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero, setNumero] = useState(1);
  const [limite, setLimite] = useState(10);
  const [resultado, setResultado] = useState([]);
  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= limite; i++) {
      nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    setResultado(nuevaTabla);
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <p>
        <a
            href="http://localhost:3006/"
            target="_blank"
            rel="noopener noreferrer"
          >DPS104 G01L </a>
        </p>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            By{"  "}
            <img src="https://1drv.ms/i/c/014378a899d74ee4/IQMqJ6zlq5iURIHAfWat3evbAcBR1rbkd97hkk4bWvCjsC8?width=1280&height=1280"
              alt="AGUILA AZUL DPSG01L Logo"
              width={100}
              height={64}
              loading="lazy" />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div>
          <h2 className={styles.title2}>Tabla de Multiplicar</h2> <label className={styles.text}>
            Ingrese un número:
            <input className={styles.input}
              type="number"
              value={numero}
              onChange={(e) => setNumero(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label className={styles.text}>
            Límite de números a mostrar:
            <input className={styles.input}
              type="number"
              value={limite}
              onChange={(e) => setLimite(parseInt(e.target.value))}
            />
          </label>
          <br />
          <button className={styles.button} onClick={generarTabla}>Generar Tabla</button>
          <hr />
          <h3>Resultado</h3> <ul className={styles.ul}>{resultado.map((item, index) => (<li className={styles.li} key={index}>{item}</li>
          ))} </ul>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>&copy; 2024 Propiedad de AGUILA AZUL</h2>
          <img src="https://1drv.ms/i/c/014378a899d74ee4/IQMqJ6zlq5iURIHAfWat3evbAcBR1rbkd97hkk4bWvCjsC8?width=1280&height=1280"
            alt="AGUILA AZUL DPSG01L Logo"
            loading="lazy" />
        </div>
      </div>
    </main>
  );
}
