import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'

import {
    CFormGroup,
    CFormText,
    CLabel,
    CCol
} from '@coreui/react';
import {GiOpenFolder} from "react-icons/gi";

const Settings = (props)=>{
    const [journeys,setjoueneys] = useState(null)
    let history = useHistory()
    useEffect(()=>{
        fetch(`${baseUrl}/api/v1/journey/alljourney`,{
            method: 'GET',
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            if(data){
                console.log(data)
                if(data.status === 'success'){
                    setjoueneys(data.data?data.data:'')
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
      })
      let journey22 = journeys.filter((e)=>e.JourneyPriority !== 6)
    return(
        <>
        <h4>Journey Setting</h4>
        {   
            journey22.map((e,i)=>{
            
                return(
                    <div key={i}>
                        <GiOpenFolder size="70px" onClick={()=>history.push(`/jsettings/${e._id}`)} data-toggle="tooltip" data-placement="top" title={e.JourneyName}/>
                    </div>
                )
            
        })}
        </>
    )
}


export default  Settings