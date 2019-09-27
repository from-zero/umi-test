import React from 'react'

export default function (props) {
    if(props.location.pathname == '/404'){
        return  null;
    }
    return (
        <div>
            <h1>布局</h1>
            <div>{props.children}</div>
        </div>
    )
}
