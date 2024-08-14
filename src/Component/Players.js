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
                    props.players.map((player) => {
                        return <Card {...player} key={player.id}  />;
                    })
                }
            </div>
        </div>
    )
}

export default Players;