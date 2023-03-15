import React from "react"
import Image from "next/image"

const VerticalArtcile = ({ reversed, img, text, title }) => {
    return (
        <React.Fragment>
            <div className={`flex h-fit w-full px-52 ${reversed ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 px-5">
                    <Image src={img} alt="" width={'auto'} height={'auto'} loading="lazy" />
                </div>
                <div>
                    <h1>{title}</h1>
                    {text}
                </div>
            </div>
        </React.Fragment>
    )
}

export default VerticalArtcile