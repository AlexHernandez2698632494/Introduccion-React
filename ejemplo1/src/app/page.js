import Image from "next/image";
import styles from "./page.module.css";
const element = (
  <><h1>Hola, Mundo!</h1>
    <h2>Son las {new Date().toTimeString()}</h2> </>
)
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          DPS104 G01L
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
        <div className="App">
          {element}
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
