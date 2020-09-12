import * as React from 'react';
import './App.scss';
const {useState} = React
function Button(props:any) {
    const[size] = useState(props.size);
    const[type] = useState(props.type);
    return( 
    <button className={`btn-${type} btn-${size}`}>{props.children}</button>
    );
}

export default Button;