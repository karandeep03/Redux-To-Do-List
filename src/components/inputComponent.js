import React from 'react';

const inputComponent = (props) => {
    return (
        <div>
            <input type={ props.type } placeholder={ props.ph } onChange={ props.typing } ></input>
        </div>
    )
}

export default inputComponent;