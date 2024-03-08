import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {filterApi} from '../Redux/homeReducer'
import'../App.css'
function Filter(){
    const dispatch=useDispatch()
    const[types,Settypes]=useState([])
    const [seekbar,Setseekbar]=useState(500)
    //handel option filter
    const handelOption=(options)=>{
        if(types.includes(options)){
            Settypes(types.filter(x=>x!==options))

        }
        else{
            Settypes([...types,options])
        }
    }
    //handel the seekbar 
    const handelseek=(event)=>{
        Setseekbar(event.target.value);
    }
    useEffect(()=>{
        dispatch (filterApi({option:types,max:seekbar}))
    },[types,seekbar])

    
    return(
        <div className="filter">
        <h2>Filter</h2>
        <p>Price: </p>
        <input type="range" min="1" max="2000"  value={seekbar} onChange={handelseek}/>

        <div>
            <h2>Category</h2>

            <label>
                <input type="checkbox" onChange={()=>handelOption("mens")}  />
                Mens 
            </label>
            <br />
            <label>
                <input type="checkbox" onChange={()=>handelOption("womens")}/>
                Womens
            </label>
            <br />
            <label>
                <input type="checkbox" onChange={()=>handelOption("others")} />
                Electronics
            </label>
            <br />


        </div>

    </div>
    )
}
export default Filter 