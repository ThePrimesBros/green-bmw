import React from 'react'
import VerticalArtcile from '@/components/VerticalArticle/VerticalArtcile'
import IMG1 from '../../public/bg_header.jpg'

export default function Home() {
    const page = React.useMemo(() => {
        if (typeof window !== 'undefined') return window
    }, [])

    const checkFocus = React.useCallback((video) => {
        if (page && page.document.hasFocus()) video?.play() 
        else video?.pause()
    }, [page])

    return (
        <React.Fragment>
            <div className="w-full h-screen">
                <header className="h-full -mt-24 relative">
                    <div className="fixed">
                        <video 
                            loop 
                            muted 
                            className='w-screen h-screen object-cover fixed z-0'
                            id="video"
                            ref={checkFocus}
                        >
                            <source src="/bmw_vid_header.mp4" type='video/mp4' />
                        </video>
                        <h1 className="uppercase top-28 left-32 absolute text-3xl font-extrabold tracking-wider text-slate-200 w-screen">
                            Achat de véhicules neuf ou d'occasion
                        </h1>
                    </div>
                </header>

                <div className="my-5 space-y-10 z-10 relative bg-black">
                    <VerticalArtcile
                        img={IMG1}
                        title={"LE PLAISIR DE LA CONDUITE. ÉLECTRIQUE."}
                        text={
                            <div className="flex justify-between h-full flex-col space-y-5">
                                <ul className="text-gray-500 space-y-3">
                                    <li>- Une toute nouvelle expérience de conduite chargée d’émotion</li>
                                    <li>- Accélération fluide depuis l’arrêt</li>
                                    <li>
                                        - Dynamique électrisante et conduite sereine – une sensation de glisse dans un silence
                                        presque parfait
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                    <VerticalArtcile
                        reversed
                        img={IMG1}
                        title={"LE PLAISIR DE LA CONDUITE. ÉLECTRIQUE."}
                        text={
                            <div className="flex justify-between h-full flex-col space-y-5">
                                <ul className="text-gray-500 space-y-3">
                                    <li>- Une toute nouvelle expérience de conduite chargée d’émotion</li>
                                    <li>- Accélération fluide depuis l’arrêt</li>
                                    <li>
                                        - Dynamique électrisante et conduite sereine – une sensation de glisse dans un silence
                                        presque parfait
                                    </li>
                                </ul>
                            </div>
                        }
                    />
                </div>
            </div>
        </React.Fragment>
    )
}
