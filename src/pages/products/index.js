import CardCard from "@/components/CarCard";
import React from "react";
import { useGetCars } from "@/hooks";
import { Fade } from "react-reveal";
import Head from "next/head";
import styles from "@/styles/product.module.css";

export default function ProductsPage() {
  const [pageNumber, setPageNumber] = React.useState(1);

  const { cars, isFetching } = useGetCars(pageNumber, 6);
  const [allCars, setAllCars] = React.useState([]);

  const keepCars = React.useCallback(() => {
    if (allCars.some((car) => cars.some((c) => c.id === car.id))) return;
    setAllCars([...allCars, ...cars]);
  }, [allCars, cars]);

  const handleLoadMore = React.useCallback(() => {
    setPageNumber(pageNumber + 1);
    keepCars();
  }, [keepCars, pageNumber]);

  React.useEffect(() => {
    if (allCars.length === 0) {
      setAllCars(cars);
      return;
    }
    if (allCars.some((car) => cars.some((c) => c.id === car.id))) return;
    setAllCars([...allCars, ...cars]);
  }, [cars]);

  return (
    <React.Fragment>
      <Head>
        <title>Nos véhicules verts - Insomniak</title>
        <meta
          name="description"
          content="Découvrez nos véhicules écologiques, les technologies vertes que nous utilisons et comment nous travaillons pour réduire notre impact sur la planète."
        />
        <meta
          name="keywords"
          content="BMW, Green, Insomniak, BMW Green, BMW Insomniak"
        />
        <meta name="author" content="Insomniak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="h-full w-full py-2 overflow-auto md:px-32 relative space-y-10">
        <div className="grid grid-cols-1 gap-4 grid-row-2 grid-flow-dense md:grid-cols-3">
          {!isFetching && !!allCars ? (
            allCars?.map((car, index) => {
              const delay = (index % 6 + 1) * 100;
              return (
                <Fade up delay={delay} key={car.id}>
                  <CardCard
                    name={car.identity.name}
                    src={car.identity.mainPicture.src}
                    id={car.id}
                  />
                </Fade>
              );
            })
          ) : (
            <div className="mx-auto w-full">
              <div className={styles.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Afficher plus de voiture
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
