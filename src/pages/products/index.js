import CardCard from '@/components/CarCard'
import React from 'react'
import { useGetCars } from '@/hooks'

export default function ProductsPage() {
    const [pageNumber, setPageNumber] = React.useState(1)
    const page = React.useMemo(() => pageNumber, [pageNumber])
    const perPage = React.useMemo(() => 6, [])

    const { cars, isLoading, isFetchingNextPage, hasNextPage } = useGetCars(page, perPage)

    const status = React.useMemo(() => {
        if (!isLoading && cars !== []) return true
        return false
    }, [isLoading, cars])

    const handleLoadMore = React.useCallback(() => {
        setPageNumber(pageNumber + 1)
    }, [setPageNumber])

    return (
        <React.Fragment>
            <div className='h-full w-full py-2 overflow-auto'>
                <span>Products Page</span>
                <div className='grid grid-cols-3 gap-4 grid-row-2 grid-flow-dense'>
                    {status ? cars?.map((car) => {
                        return <CardCard key={car.id} {...car} />
                    }) : <span>Loading...</span>}
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLoadMore}>
                    Load More
                </button>
            </div>
        </React.Fragment>
    )
}
