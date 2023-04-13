import React from "react";
import { useGetCar } from "@/hooks";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { car } = useGetCar(id);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const downloadImage = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setImages((prevImages) => [...prevImages, objectUrl]);
    };

    car?.identity.mainPicture.src &&
      downloadImage(car.identity.mainPicture.src);
  }, [car]);

  return (
    <React.Fragment>
      <Head>
        <title>BMW {car?.identity.name} - Insomniak</title>
        <meta
          name="description"
          content="Découvrez notre véhicule écologique, les technologies vertes que nous utilisons et comment nous travaillons pour réduire notre impact sur la planète."
        />
        <meta
          name="keywords"
          content="BMW, Green, Insomniak, BMW Green, BMW Insomniak"
        />
        <meta name="author" content="Insomniak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full lg:flex lg:items-center lg:justify-around">
        <Image
          src={images[0]}
          alt={car?.identity.name}
          width={800}
          height={600}
          className="mx-auto lg:mx-0"
          loading="lazy"
        />
        <div className="mx-auto lg:mx-0">
          <h1 className="uppercase drop-shadow-2xl text-5xl font-extrabold text-slate-100 mb-12 text-center lg:text-left">
            BMW {car?.identity.name}
          </h1>
          <hr />
          <div className="mx-auto lg:mx-0 w-2/3 lg:w-auto">
            <h2 className="uppercase drop-shadow-2xl text-3xl font-extrabold text-slate-100 my-5">
              Information sur la voiture
            </h2>
            <div className="my-5">
              <h3 className="uppercase text-2xl font-bold text-slate-100 mb-2">
                Engine
              </h3>
              <p className="text-slate-100 capitalize">{car?.fuel}</p>
            </div>
            <div className="my-5">
              <h3 className="uppercase text-2xl font-bold text-slate-100 mb-2">
                Transmission
              </h3>
              <p className="text-slate-100 capitalize">{car?.gearboxType}</p>
            </div>
            <div className="my-5">
              <h3 className="uppercase text-2xl font-bold text-slate-100 mb-2">
                Couleur
              </h3>
              <p className="text-slate-100">
                Bleu / Rouge / Blanc / Gris / Noir / Argent
              </p>
            </div>
            <div className="my-5">
              <h3 className="uppercase text-2xl font-bold text-slate-100 mb-2">
                Consomation et puissance
              </h3>
              <p className="text-slate-100">
                Consomation: {car?.consumption}L / 100km
              </p>
              <p className="text-slate-100">Puissance: {car?.power} Ch</p>
            </div>
          </div>
          <hr />
          <div className="my-5 mx-auto lg:mx-0 w-2/3 lg:w-auto">
            <h2 className="uppercase drop-shadow-2xl text-3xl font-extrabold text-slate-100 my-5">
              Prix
            </h2>
            <p className="text-slate-100 font-bold">Prix: {car?.price} €</p>
            <div className="flex flex-col sm:flex-row sm:justify-between my-3 mx-5">
              <button class="bg-black text-white py-3 px-6 rounded border border-yellow-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 mb-5">
                Acheter maintenant
              </button>

              <button className="bg-black text-white py-3 px-6 rounded border border-yellow-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 mb-5">
                Tester en garage
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}
