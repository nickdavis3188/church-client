import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'
import {
    // CButton,
    CProgress,
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    // CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader,
    CFormGroup,
    CFormText,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CButton,
    CAlert
} from '@coreui/react';
import {GiOpenFolder} from "react-icons/gi";

const Settings = (props)=>{
    const [journeys,setjoueneys] = useState([])
    const [dateValue,setDateValue] = useState('')
    const [dateChekValue,setDateChekValue] = useState('')

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
      
      useEffect(()=>{
        async function loadfun(){
            let getdata = await fetch(`${baseUrl}/api/v1/journeyDate/checkJourneyDate`,{
                method: 'GET'
            })
            let mainData = await getdata.json()
            if(mainData){
                if(mainData.status === 'success'){ 
                    setDateChekValue(mainData.status?mainData.status:'')
                }else{
                    if(mainData.status === 'not found'){
                        setDateChekValue(mainData.status?mainData.status:'')
                    }else{
                        if(mainData.status === 'fail'){
                          return toast(mainData.message?mainData.message:'')
                        }
                    }
                }  
            }
        }
        loadfun()
      },[])

      let journey22 = journeys.filter((e)=>e.JourneyPriority !== 6)
      const setJourneyDate = (e)=>{
        let dateAttend = JSON.stringify({journeyDate:dateValue})
       fetch(`${baseUrl}/api/v1/journeyDate/journeyDate`,{
            method: 'POST',
            body:dateAttend,
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){ 
                    setDateValue('')
                    return toast(data.message?data.message:'')
                }else{
                    if(data.status === 'not found'){
                        return toast(data.message?data.message:'')           
                    }else{
                        if(data.status === 'fail'){
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
      }

      let dateBtn = dateChekValue === 'success'?<button className=' btn btn-primary disabled' disabled >journey Date Is Already Set</button>:<button className=' btn btn-primary' onClick={(e)=>setJourneyDate(e)}>Set Journey Date</button>
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
		
        <br/>
		<hr/>
		
        <h4>Journey Date</h4>
        <CFormGroup row>
            <CCol  md="6">
                <input type="date" id="date-input" value={dateValue} className="form-control" onChange={(e)=>setDateValue(e.target.value)}/>
                <CFormText className="help-block">Please enter Journey Date</CFormText>
            </CCol>
            <CCol  md="6">
                {dateBtn}
            </CCol>
        </CFormGroup>
		
		<br/>
		<hr/>
		
		<h4>Journey Registration</h4>
		<button className=' btn btn-primary' onClick={(e)=> history.push('/journey')}>Journey</button>
		<hr/>
		<br/>
		
        <ToastContainer/>
        </>
    )
}


export default  Settings