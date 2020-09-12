import * as React from 'react';
import './App.scss';
const {useState} = React
function Card(props:any) {
    const[position] = useState(props.position);
    return( 
        <div className={`card-${position}`}>{props.children}</div>
    );
}

export default Card;