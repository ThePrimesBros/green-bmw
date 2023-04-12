import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Header() {
    const page = React.useMemo(() => {
        if (typeof window !== 'undefined') return window
    }, [])

    const checkFocus = React.useCallback((video) => {
        if (page && page.document.hasFocus()) video?.play()
        else video?.pause()
    }, [page])

    const [text, count] = useTypewriter({
        words: ["la performance", "la vitesse", "l'écologie", "la puissance", "la sécurité", "la technologie"],
        loop: true,
        delaySpeed: 1500,
        typeSpeed: 50,
        deleteSpeed: 30,
    })

    return (
        <React.Fragment>
            <div className="relative h-screen bg-white flex justify-center items-center w-full" id='header'>
                <video
                    loop
                    muted
                    className='w-full top-0 object-cover fixed z-0 h-screen'
                    id="video"
                    ref={checkFocus}
                >
                    <source src="/test.webm" type='video/mp4' />
                </video>
                <div className='uppercase drop-shadow-2xl text-5xl font-extrabold tracking-[3rem] text-slate-100 w-screen z-10 text-center flex flex-col space-y-5 mb-52'>
                    <h1>
                        BMW
                    </h1>
                    <h2 className='text-xl tracking-wide z-10'>
                        A la pointe de <span className='text-red-500'>{text}</span>
                    </h2>
                </div>
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