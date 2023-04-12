import React from "react"
import Image from "next/image"

const VerticalArtcile = ({ reversed, img, text, title }) => {
    return (
        <React.Fragment>
            <div className={`md:flex h-fit w-full lg:px-52 md:px-12 px-12 mb-12 ${reversed ? 'flex-row-reverse' : ''} md:items-center`}>
                <div className="md:w-1/2 w-full px-5">
                    <Image src={img} alt="" width={'auto'} height={'auto'} loading="lazy" />
                </div>
                <div className="md:w-1/2 w-full px-5 md:px-0 mt-3 md:mt-3">
                    <h1 className="text-white font-bold">{title}</h1>
                    {text}
                </div>
            </div>
        </React.Fragment>
    )
}

export default VerticalArtcile