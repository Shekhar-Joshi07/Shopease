import React, { useEffect, useState } from 'react';
import axios from "axios";
import MobileCart from './MobileCart';

const Mobilepage = () => {
    const [mobiledata, setMobiledata] = useState([]);
    const getData = () =>{
        axios.get("https://shopease-5vqg.onrender.com/mobileData").then((res) =>{
            console.log(res.data);
            setMobiledata(res.data);
        }).catch((err) =>{
            console.log("Error fetching Data");
        })
    }

    useEffect(()=>{
      getData();
    },[])
  return (
    <div>
       {mobiledata?.map((el)=> <MobileCart key={el.id} {...el} />)} 
    </div>
  )
}

export default Mobilepage