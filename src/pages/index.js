import React from 'react'
import VerticalArtcile from '@/components/VerticalArticle/VerticalArtcile'
import IMG1 from '../../public/bg_header.jpg'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import { Fade } from 'react-reveal'

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <div className="py-10 space-y-10 z-10 relative bg-main-100 h-full" id='article-section'>
                <Fade left>
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
                </Fade>
                <Fade right>
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
                </Fade>
            </div>
        </React.Fragment >
    )
}
