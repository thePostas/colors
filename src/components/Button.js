import React from 'react';

export default function Button(props) {
    return (
        <button
            onClick={ ()=>props.checkUpdates(props.index) }
            className={ props.colors.name }>{ props.colors.name }
        </button>
    )
};




