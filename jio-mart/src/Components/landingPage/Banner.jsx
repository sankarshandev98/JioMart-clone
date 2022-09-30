import React from 'react'

function Banner(props) {
    return (
        <div>
            <a href="#"><img style={{ width: "98.5%", margin: " 0px 10px" }} src={props.url} alt="" /></a>
        </div>
    )
}

export default Banner
