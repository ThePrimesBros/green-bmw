import { useQuery } from "react-query"
import React from "react"


const GET_ALL_CARS = '/api/car'


export const carKeys = {
    all: (pageNumber, perPage) =>
        ['batchs', pageNumber, perPage]
}

export const useGetCars = (pageNumber, perPage) => {
    const arrayOfCars = useQuery(carKeys.all(pageNumber, perPage), () => fetch(`${GET_ALL_CARS}?pageNumber=${pageNumber}&itemPerPage=${perPage}`).then(res => res.json()), {
        keepPreviousData: true,
    })

    const { data, isLoading, isError, isFetching } = arrayOfCars

    const cars = React.useMemo(() => {
        return !!data ? data.data : undefined
    }, [data])
    return { cars, isLoading, isError, isFetching }
}