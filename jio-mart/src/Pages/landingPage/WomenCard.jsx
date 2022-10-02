import React from 'react'
import style from "./LandingPage.module.css"

function WomenCard(props) {
    return (
        <div style={{ width: "19%",minWidth:"200px",margin:"20px auto", height: "330px" }}>
            <a href="#">
                <img className={style.SmallCard} style={{ borderRadius: "10px",width:"100%", height: "320px" }} src={props.url} alt="" />
                <p style={{textAlign:'center',marginTop:"10px",marginRight:"20px",color:"black",fontWeight:"normal"}}>{props.item}</p>
            </a>
        </div>
    )
}

export default WomenCard
