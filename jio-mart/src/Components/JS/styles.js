import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme)=>({
    cardGrid:{
        padding: "20px 30px",
        marginTop:"2%",
        maxWidth:"100%",
       // border: "1px solid red",
        backgroundColor:"white",
    },
    card:{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border:"solid 0.1px rgba(112,112,112,.38)",
        borderRadius:"10px",
        width: "100%",
        marginLeft:"5%"
    },
    cardMedia:{
        paddingTop:"56.25%",
        marginTop:"10px",
        width: "80%",
        marginLeft:"10%",
       // border: "1px solid red"
    },
    
    cardContent:{
        flexGrow:1,
        color:"#151b39",
        fontSize:"14px",
        marginTop:"20px",
        marginBottom:"10px",
        //border: "1px solid red"
    },
    main:{
        marginLeft:"25%"
    },
    div:{
        //border: "1px solid red",
    }
}))


export {useStyles}