import React from 'react'

const InfoCard = ({header,info,Image}) => {
    return (
        <div className='card'>
            <img className='cardIMG' src={Image} alt="" />
            <h1 className='cardHead'>{header}</h1>
            <p className='cardInfo'>{info}</p>
        </div>
    )
}

export default InfoCard
