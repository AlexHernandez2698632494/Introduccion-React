import Image from "next/image";
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul className={styles.equipoList}>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.jugadorItem} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74Kg" },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg" },
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg" },
      ],
    },
    // ... agregar otros equipos
  ];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <p>
        <a
            href="http://localhost:3006/"
            target="_blank"
            rel="noopener noreferrer"
          >DPS104 G01L </a>
        </p>        <div>
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
          <h1>Mi Aplicación de Fútbol</h1> <br></br> <Equipos equipos={equiposData} />
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
