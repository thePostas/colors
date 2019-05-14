import React from 'react';

export default function light(props) {
    return (
        <div
            className='shape'
            style={ {background: props.colors.active ? props.colors.color : 'white'} }
        />
    )
};
