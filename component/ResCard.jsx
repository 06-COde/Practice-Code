import { IMG_URL } from "../Utils/constant.js";

const ResCard = (props)=>{
    const {ResData} = props;
    const{name ,cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = ResData?.info;
    return(
         <div className="res-content">
            <img alt="app-logo" src= {IMG_URL +cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime}Minutes</h4>
        </div>
    );
};

export default  ResCard;