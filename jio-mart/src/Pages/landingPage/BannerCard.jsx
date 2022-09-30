import React from 'react'
import style from "./LandingPage.module.css"
import { Link } from "react-router-dom"
function BannerCard(props) {
    if (props.color == "#efd6da") {
        return (
            <div style={{ backgroundColor: "#efd6da" }} className={style.BannerCard}>
                <div className={style.BannerOffer}>
                    <h5 style={{ textAlign: "center", paddingTop: "8px", color: "#fff" }}>{props.offer}</h5>
                </div>
                <div className={style.BannerItem}>
                    <Link to={props.itemUrl}>
                        <div className={style.BannerItemInner}>
                            <img className={style.BannerImg} src={props.url} alt="" />
                            <h4 style={{ fontSize: "16px", fontWeight: "bold" }} >{props.item}</h4>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    else if (props.color == "#c5f8c0") {
        return (
            <div style={{ backgroundColor: "#c5f8c0" }} className={style.BannerCard}>
                <div className={style.BannerOffer}>
                    <h5 style={{ textAlign: "center", paddingTop: "8px", color: "#fff" }}>{props.offer}</h5>
                </div>
                <div className={style.BannerItem}>
                    <div className={style.BannerItemInner}>
                        <img className={style.BannerImg} src={props.url} alt="" />
                        <h4 style={{ fontSize: "16px", fontWeight: "bold" }} >{props.item}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.color == "#bce1fe") {
        return (
            <div style={{ backgroundColor: "#bce1fe" }} className={style.BannerCard}>
                <div className={style.BannerOffer}>
                    <h5 style={{ textAlign: "center", paddingTop: "8px", color: "#fff" }}>{props.offer}</h5>
                </div>
                <div className={style.BannerItem}>
                    <div className={style.BannerItemInner}>
                        <img className={style.BannerImg} src={props.url} alt="" />
                        <h4 style={{ fontSize: "16px", fontWeight: "bold" }} >{props.item}</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default BannerCard
