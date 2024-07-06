"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta: ${resultadoResta}`);
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
        <div className={styles.calculadora}>
          <div className={styles.numeros}>
            <label className={styles.text}>Número 1:</label> <input className={styles.inputnum} type="number"
              value={numero1} onChange={(e) => setNumero1(e.target.value)} /> </div>
          <div className={styles.numeros}>
            <label className={styles.text} >Número 2:</label> <input className={styles.inputnum} type="number"
              value={numero2} onChange={(e) => setNumero2(e.target.value)} /> </div>
          <div>
            <button className={styles.button} onClick={sumar}>Sumar</button>
            <button className={styles.button} onClick={restar}>Restar</button>
          </div>
          {resultado && <div className={styles.resultado}>{resultado}</div>}
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
