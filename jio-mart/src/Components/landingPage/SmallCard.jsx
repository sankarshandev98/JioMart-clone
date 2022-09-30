import React from 'react'
import style from "./LandingPage.module.css"

function SmallCard(props) {
    return (
        <div style={{ width: "19%",minWidth:"200px",margin:"10px auto", border: "1px solid #d0c6c6", borderRadius: "3px" }}>
            <a href="#">
                <img className={style.SmallCard}  style={{ padding: "12px",width:"100%" }} src={props.url} alt="" />
            </a>
        </div>
    )
}

export default SmallCard
