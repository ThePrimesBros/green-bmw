import React from "react";
import VerticalArtcile from "@/components/VerticalArticle/VerticalArtcile";
import IMG1 from "../../public/electricity.jpg";
import IMG2 from "../../public/entretiens.jpg";
import IMG3 from "../../public/durabilite.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fade } from "react-reveal";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ta BMW Green - Insomniak</title>
        <meta
          name="description"
          content="Explorez le monde de BMW de manière responsable avec notre site respectueux de l'environnement"
        />
        <meta
          name="keywords"
          content="BMW, Green, Insomniak, BMW Green, BMW Insomniak"
        />
        <meta name="author" content="Insomniak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div
        className="py-10 space-y-10 z-10 relative bg-main-100 h-fit"
        id="article-section"
      >
        <Fade left>
          <VerticalArtcile
            img={IMG1}
            title={"NOS DERNIERS MODELES DE BMW ELECTRIQUE."}
            text={
              <div className="flex justify-between h-full flex-col space-y-5">
                <h2 className="text-white mt-3">
                  Pourquoi faut-il passer à la BMW ? (Electrique par autre
                  mesure)
                </h2>
                <ul className="text-gray-500 space-y-3 text-justify">
                  <li>
                    - Ne manquez pas votre chance de passer à la voiture
                    électrique BMW - une expérience de conduite exceptionnelle
                    combinée à des performances éco-responsables.
                  </li>
                  <li>
                    - Avec notre offre spéciale actuelle, vous pouvez bénéficier
                    d'avantages financiers incroyables pour passer à un véhicule
                    électrique BMW dès maintenant.
                  </li>
                  <li>
                    - Les voitures électriques BMW offrent une autonomie
                    impressionnante et une charge rapide, vous permettant de
                    parcourir de longues distances sans compromis sur la
                    performance ou la durabilité.
                  </li>
                  <li>
                    {" "}
                    - Les voitures électriques sont l'avenir de l'automobile, et
                    BMW est fier de faire partie de cette révolution écologique
                    en proposant des voitures électriques de qualité supérieure.
                  </li>
                  <li>
                    {" "}
                    - Ne laissez pas cette opportunité vous passer sous le nez -
                    passez à la voiture électrique BMW dès maintenant et
                    rejoignez-nous dans notre mission de conduire vers un avenir
                    plus propre et plus durable.
                  </li>
                </ul>
              </div>
            }
          />
        </Fade>
        <Fade right>
          <VerticalArtcile
            reversed
            img={IMG2}
            title={"NOUS INTERVENONS PARTOUT."}
            text={
              <div className="flex justify-between h-full flex-col space-y-5">
                <p className="text-gray-500 space-y-3 text-justify">
                  En plus de notre large sélection de voitures BMW, nous offrons
                  également des services de maintenance et de réparation de
                  haute qualité pour vous assurer que votre voiture reste en
                  parfait état. De plus, notre équipe de mécaniciens qualifiés
                  est équipée des derniers outils de diagnostic pour identifier
                  rapidement les problèmes potentiels et les résoudre de manière
                  efficace. Nous utilisons également des pièces d'origine BMW
                  pour assurer la qualité et la fiabilité de chaque réparation.
                  Avec notre service de maintenance préventive, nous pouvons
                  vous aider à prolonger la durée de vie de votre voiture et à
                  éviter les coûts de réparation imprévus. Chez nous, vous
                  pouvez avoir la tranquillité d'esprit en sachant que votre
                  voiture est entre les mains expertes de notre équipe.
                </p>
              </div>
            }
          />
        </Fade>
        <Fade left>
          <VerticalArtcile
            img={IMG3}
            title={"LA DURABILITE EST NOTRE MOT CLE."}
            text={
              <div className="flex justify-between h-full flex-col space-y-5">
                <p className="text-gray-500 space-y-3 text-justify">
                  BMW s'engage pour un avenir durable et propose des véhicules
                  respectueux de l'environnement. Avec une utilisation innovante
                  de matériaux durables et une production responsable, les
                  voitures BMW sont conçues pour réduire leur impact
                  environnemental. En plus de cela, les technologies de pointe
                  intégrées dans les véhicules BMW maximisent leur efficacité
                  énergétique, réduisant ainsi leur empreinte carbone. En
                  choisissant une BMW, vous investissez dans une voiture à la
                  pointe de la durabilité et de la performance, tout en
                  contribuant à la protection de notre planète pour les
                  générations futures.
                </p>
              </div>
            }
          />
        </Fade>
      </div>
      <div
        className="py-10 space-y-10 z-10 relative bg-main-100 h-fit"
        id="article-section"
      >
        <Footer />
      </div>
    </React.Fragment>
  );
}
