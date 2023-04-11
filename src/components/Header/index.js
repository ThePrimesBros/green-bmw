import React from 'react'

export default function Header() {
    const page = React.useMemo(() => {
        if (typeof window !== 'undefined') return window
    }, [])

    const checkFocus = React.useCallback((video) => {
        if (page && page.document.hasFocus()) video?.play()
        else video?.pause()
    }, [page])
    return (
        <React.Fragment>
            <div className="relative h-screen bg-white" id='header'>
                <video
                    loop
                    muted
                    className='w-full top-0 object-cover fixed z-0 h-screen'
                    id="video"
                    ref={checkFocus}
                >
                    <source src="/bmw_vid_header.mp4" type='video/mp4' />
                </video>
                <h1 className="uppercase top-28 left-32 absolute text-3xl font-extrabold tracking-wider text-white w-screen">
                    Achat de véhicules neuf ou d'occasion
                </h1>
            </div>
            <a href='#article-section' className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <svg
                    className="animate-bounce w-10 h-10 text-white p-2 rounded-full border-4 border-white cursor-pointer "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </a>
        </React.Fragment>
    )
}