import { useQuery } from "react-query"
import React from "react"

const GET_ALL_CARS = '/cars'

export const carKeys = {
    all: (pageNumber, perPage) =>
        ['batchs', pageNumber, perPage]
}

export const useGetCars = (pageNumber, perPage) => {
    const arrayOfCars = useQuery(carKeys.all(pageNumber, perPage), () =>
        fetch(process.env.API_BASE_URL + GET_ALL_CARS + `?page=${pageNumber}&itemsPerPage=${perPage}`).then(res => res.json()), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    })

    const { data, isLoading, isError, isFetching } = arrayOfCars

    const cars = React.useMemo(() => {
        // get Hydra members
        return !!data ? data['hydra:member'] : []
    }, [data])
   
   return { cars, isLoading, isError, isFetching }
}

export const useGetCar = (id) => {
    const car = useQuery(['car', id], () =>
        fetch(process.env.API_BASE_URL + GET_ALL_CARS + `/${id}`).then(res => res.json()), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    })

    const { data, isLoading, isError, isFetching } = car

    return { car: data, isLoading, isError, isFetching }
}