import * as React from 'react';
import './App.scss';
const {useState} = React

function Label(props:any) {
    const[variant] = useState(props.variant);

    return(
        <p className={`label-${variant}`}>{props.children}</p>
    );
}

export default Label;