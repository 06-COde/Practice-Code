import ResCard from "./ResCard";
import {  useEffect, useState } from "react";

const Body = () =>{
   
const [resDetails1 , setresDetails1] = useState([]) ;
const [allRestaurants, setAllRestaurants] = useState([]);

const [searchbar, setsearchbar ] = useState("");


useEffect(()=>{
  fetchapi();
},[]);

const fetchapi = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  console.log(json);

  setresDetails1(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setAllRestaurants(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

  
   

    return(
      <>
      <div className="Containerbtn">
            <div className="search-bar">
            <input
               type="text"
              placeholder="Search Restaurants..."
              className="search"
              value={searchbar}
              onChange={(e)=>{setsearchbar(e.target.value)}}
            />
            <button className="btns" onClick={()=>{
              const allRestaurants = resDetails1.filter((res)=>{
                return res.name.toLowerCase().includes(searchbar.toLowerCase());
                
              })
              setresDetails1(allRestaurants);
            }}
            >Search</button>
            </div>
            <div className="BTN1">
                <button onClick={()=>{
                    Detailsres= resDetails1.filter((res) => res.avgRating > 4);
                    setresDetails1(Detailsres);
                    console.log(resDetails1);
                }}
                >Top Resturant
                </button>
            </div>
            <div className="BTN2">
                <button onClick={()=>{
                    Detailsres =resDetails1.filter((res)=> res.avgRating < 4);
                    setresDetails1(Detailsres);
                }}
                >Low Resturants
                </button>
            </div>
      </div>

      <div className="res-container">
        {resDetails1.map((details)=>(
          <ResCard key={details.id} ResData={details} />
        ))}
    </div>
    </>
  );
};


export default Body;