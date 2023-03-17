import { useInfiniteQuery } from "react-query"
import React from "react"


const GET_ALL_CARS = '/api/car'


export const carKeys = {
    all: (pageNumber, perPage) =>
        ['batchs', pageNumber, perPage]
}

export const useGetCars = (pageNumber, perPage) => {
    const arrayOfCars = useInfiniteQuery(carKeys.all(pageNumber, perPage), () => fetch(GET_ALL_CARS).then(res => res.json()), {
        refetchOnWindowFocus: false,
        initialData: () => {
            return []
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.length < perPage) {
                return undefined
            }
            return [pageNumber + 1, perPage]
        }
    })
    const { data, isLoading, isError, hasNextPage, isFetchingNextPage, } = arrayOfCars

    const cars = React.useMemo(() => !!data && data?.pages?.slice(
        (pageNumber - 1) * perPage,
        (pageNumber - 1) * perPage + perPage
    )[0], [data])
    return { cars, isLoading, isError, hasNextPage, isFetchingNextPage }
}