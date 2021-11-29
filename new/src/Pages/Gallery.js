import React from 'react'
import Card from '../Components/InfoCard'


const Gallery = () => {
    return (
        <div>
            <h1 className='galHead'>Gallery Page</h1>
            <p className='galInfo'>These are some of my previous websites over the last 18 months. They are going to go from when I had first started to where I am currently at now. To show improvement and progress over my journey. Please enjoy!</p>
            <div className='holder'>
                <a href=""><Card header='Website One' info='Lorem24'/></a>
                <a href=""><Card header='Website Two' info='Lorem24'/></a>
                <a href=""><Card header='Website One' info='Lorem24'/></a>
                <a href=""><Card header='Website Two' info='Lorem24'/></a>
                <a href=""><Card header='Website One' info='Lorem24'/></a>
                <a href=""><Card header='Website Two' info='Lorem24'/></a>
                <a href=""><Card header='Website One' info='Lorem24'/></a>
                <a href=""><Card header='Website Two' info='Lorem24'/></a>
                <a href=""><Card header='Website One' info='Lorem24'/></a>
            </div>
        </div>
    )
}

export default Gallery
