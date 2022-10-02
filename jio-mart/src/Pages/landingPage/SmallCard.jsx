import React from 'react'
import style from "./LandingPage.module.css"

function SmallCard(props) {
    return (
        <div style={{ width: "10%", minWidth: "180px", margin: "10px auto", borderRadius: "3px" }}>
            <a href="#">
                <img className={style.SmallCard} style={{ width: "100%" }} src={props.url} alt="" />
            </a>
        </div>
    )
}

export default SmallCard
