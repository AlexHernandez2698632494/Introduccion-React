"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Guia = ({ guias }) => {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Introducción a React</h2>
      {guias.map((guia) => (
        <div key={guia.id}>
          <h3 className={styles.guidenumber}>{guia.nombre}</h3>
          <ul className={styles.guiaList}>
            {(guia.plantilla || []).map((guia2, index) => (
              <li className={styles.guia2Item} key={guia2.id}>
                <strong>{guia2.nombre} {index + 1}.</strong>
                <button
                  onClick={() => handleButtonClick(guia2.Accion)}
                  className={styles.button}
                >
                 Ir a {guia2.nombre} {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const guiasData = [
    {
      id: 1,
      nombre: "DESARROLLO",
      plantilla: [
        { id: 1, nombre: "Ejemplo", Accion: "http://localhost:3000/" },
        { id: 2, nombre: "Ejemplo", Accion: "http://localhost:3001/" },
        { id: 3, nombre: "Ejemplo", Accion: "http://localhost:3002/" },
        { id: 4, nombre: "Ejemplo", Accion: "http://localhost:3003/" },
      ],
    },
    {
      id: 2,
      nombre: "DISCUSIÓN DE RESULTADOS",
      plantilla: [
        { id: 1, nombre: "Ejercicio", Accion: "http://localhost:3004/" },
        { id: 2, nombre: "Ejercicio", Accion: "http://localhost:3005/" },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>DPS104 G01L</p>
        <div>
          <a href="" target="_blank" rel="noopener noreferrer">
            By{" "}
            <img
              src="https://1drv.ms/i/c/014378a899d74ee4/IQMqJ6zlq5iURIHAfWat3evbAcBR1rbkd97hkk4bWvCjsC8?width=1280&height=1280"
              alt="AGUILA AZUL DPSG01L Logo"
              width={100}
              height={64}
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div>
          <h1>Guía de Laboratorio No. 2</h1> <br></br> <Guia guias={guiasData} />
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>&copy; 2024 Propiedad de AGUILA AZUL</h2>
          <img
            src="https://1drv.ms/i/c/014378a899d74ee4/IQMqJ6zlq5iURIHAfWat3evbAcBR1rbkd97hkk4bWvCjsC8?width=1280&height=1280"
            alt="AGUILA AZUL DPSG01L Logo"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
