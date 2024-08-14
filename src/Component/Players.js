import React from 'react'
import Card from './Card'
const Players = (props) => {

    

    return (
        <div className='container'>
            <div>
                <h2 className='title'>2011 WC TEAM</h2>
            </div>
            <div className='cards'>
                {
                    props.tours.map((tour) => {
                        return <Card {...tour} key={tour.id}  />;
                    })
                }
            </div>
        </div>
    )
}

export default Players;