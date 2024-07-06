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
                <Image src={jugador.foto} alt={jugador.nombre} width={100} height={100} />
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
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74Kg", foto: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBT_9CHCTrrSBl2hZAbdBu-FWhbsMX1R4qNf0UfFPHwFgbOLE1" },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg", foto: "https://s3.sportstatics.com/relevo/www/multimedia/202308/31/media/cortadas/gonzalo-garcia-castilla-RfjP8mSkeztcvqiI09IoG0J-1200x648@Relevo.jpg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg", foto: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNiuBExHxLr_el1LnuEOPOllSm3465APF_IaHeoNmMql8dUWol" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.75", Peso: "74Kg", foto: "https://prod-media.beinsports.com/image/1701802802531_dd824cee-a044-4fd7-a565-a4453f968e36.jpg" },
        { id: 2, nombre: "Iñigo Martinez", Altura: "1.82", Peso: "74Kg", foto: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRaUglX9k8Wt5L4ZpoPkkYO7J0o89IUhzgPt4YFiNTCOyYM7j3q_E3fUdf0bfHOzJBptMN-A96wx04KHW8" },
        { id: 3, nombre: "Gavi", Altura: "1.85", Peso: "81Kg", foto: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2960,h_1665,x_0,y_351/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/12up_es_international_web/01gpxvcxmty037scekgw.jpg" },
      ],
    },
    {
      id: 3,
      nombre: "Argentina",
      plantilla: [
        { id: 1, nombre: "Julián Álvarez", Altura: "1.70", Peso: "70", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnOJ-ZsMsum4sJYq3bWFFqHs_NqI1uFQveA&s" },
        { id: 2, nombre: "Paulo Dybala", Altura: "1.77", Peso: "75", foto: "https://media.tycsports.com/files/2020/07/30/109346/paulo-dybala-se-une-a-common-goal-para-ayudar-a-los-jovenes-mas-vulnerables.jpg" },
        { id: 2, nombre: "Eduardo Ávila", Altura: "1.82", Peso: "80", foto: "https://media.tycsports.com/files/2020/07/18/107611/gaston-avila.jpg" },
      ]
    },
    {
      id: 4,
      nombre: "Inter de Miami",
      plantilla: [
        {id:1,nombre:"Lionel Messi",Altura:"1.70",Peso:"70",foto:"https://the18.com/sites/default/files/styles/x-large_square__4_3_/public/feature-images/GettyImages-1573368931.jpg?itok=E3q2-XFK"},
        {id:1,nombre:"Luis Suárez",Altura:"1.82",Peso:"86",foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnPUIsgLRYPquLyxSf8WLqWVdL0dfY2zHsQ&s"},
        {id:1,nombre:"Jordi Alba",Altura:"7.70",Peso:"68",foto:"https://tmssl.akamaized.net/images/foto/galerie/jordi-alba-inter-miami-cf-1692162101-114140.jpg?lm=1692162125"}
      ]
    }
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
