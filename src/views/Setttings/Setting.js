import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'

import {GiOpenFolder} from "react-icons/gi";

const Settings = (props)=>{
    const [journeys,setjoueneys] = useState([])
    let history = useHistory()
    useEffect(()=>{
        fetch(`${baseUrl}/api/v1/journey/alljourney`,{
            method: 'GET',
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            if(data){
                if(data.status === 'success'){
                    console.log(data.data)
                    let dataArr = (data.data.length >= 1?data.data.filter((e)=>e.JourneyPriority !== 6):'Jourey Not Found')
                    console.log(dataArr)
                    setjoueneys(dataArr.length >= 1?dataArr:[])
                }else{
                    if(data.status === 'fail'){
                      return toast(data.message?data.message:'')
                    }else{
                        if(data.status === 'error'){
                          return toast(data.message?data.message:'')
                        }
                    }
                }  
            }
        })
        .catch((err)=>{
            if(err){
            console.log(err) 
            alert(err)
            }
        })
      },[])
      let journey22 = journeys.filter((e)=>e.JourneyPriority !== 6)
    return(
        <>
        <h4>Journey Setting</h4>
        <div className="list-group" >
            {   
            journey22.map((e,i)=>{
            
                return(
                        <div className="list-group-item list-group-item-action flex-column align-items-start " key={i}>
                            <div className="d-flex w-100 justify-content-between">
                                <GiOpenFolder size="70px" onClick={()=>history.push(`/Journeysettings/${e._id}`)} data-toggle="tooltip" data-placement="top" title={e.JourneyName}/>                      
                            </div>
                             <small>{e.JourneyName}</small>
                        </div>
                )           
            })}
        </div>
        <ToastContainer/>
        </>
    )
}


export default  Settings