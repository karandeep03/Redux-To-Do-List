import React from 'react';

const buttonComponent = (props) => {
    return (
        <div>
            <button onClick={props.clicked}>
                {props.title}
            </button>
        </div>
    )
}

export default buttonComponent;