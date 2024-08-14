import React, { useState } from "react";

const Card = ({ id, image, info, name}) => {
    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadMore(!readmore);
    }


    return (
        <div className="card">
            <img src={image} className="image" alt="img"/>
            <div className="playerInfo">
                <div className="playerDetails">
                   
                    <h4 className="playerName">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
           
        </div >
    );
};

export default Card;
