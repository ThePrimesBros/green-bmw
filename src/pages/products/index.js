import CardCard from '@/components/CarCard'
import React from 'react'
import { useGetCars } from '@/hooks'

export default function ProductsPage() {
    const [pageNumber, setPageNumber] = React.useState(1)

    const { cars, isFetching } = useGetCars(pageNumber, 6)
    const [allCars, setAllCars] = React.useState([])

    const keepCars = React.useCallback(() => {
        setAllCars([...allCars, ...cars])
    }, [allCars, cars])

    const handleLoadMore = React.useCallback(() => {
        setPageNumber(pageNumber + 1)
        keepCars()
    }, [keepCars, pageNumber])

    React.useEffect(() => {
        setAllCars(cars)
    }, [cars])

    return (
        <React.Fragment>
            <div className='h-full w-full py-2 overflow-auto md:px-32 relative space-y-10'>
                <div className='grid grid-cols-1 gap-4 grid-row-2 grid-flow-dense md:grid-cols-3'>
                    {!isFetching && !!allCars ? allCars?.map((car) => {
                        return <CardCard key={car.id} {...car} />
                    }) : <span>Loading...</span>}
                </div>
                <div className='w-full flex justify-center items-center'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleLoadMore}>
                        Load More
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
