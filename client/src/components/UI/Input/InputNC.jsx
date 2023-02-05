import React from 'react';
import classes from './Input.module.css'

function InputNC(props) {
    return (<>
    <input className={classes.input} {...props}/>
    </>);
}

export default InputNC;