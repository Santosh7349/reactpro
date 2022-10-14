import { useState,useEffect } from "react";
const Favourites = (props) => {
    let title=props.data                                 
    let[favourites,setfav]=useState([])
    let handleDelete=(id)=>{
        setfav(favourites.filter(x =>x.id !== id))
    }
    useEffect(()=>{
        fetch('http://localhost:4000/favourites')
        .then(res=>{
            return res.json()
        })
        .then(data =>{
            setfav(data)
        })
    },[])
    return ( 
        <div className="favourites">
            <h2>{title}</h2>
            {
                favourites.map((data)=>{
                    return(
                        <div className="list">
                        <h1>{data.title}</h1>
                        <p>{data.genre},{data.language}</p>
                        <p>{data.rating}</p>
                        <button onClick={()=>handleDelete(data.id)}>Delete</button>

                        </div>
                        )
                })  
            }

        </div>
    );
}
 
export default Favourites;