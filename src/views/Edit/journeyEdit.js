import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'

import {
    CFormGroup,
    CFormText,
    CLabel,
    CCol,
    CCardHeader,
    CCollapse,
    CCard,
    CCardBody,
    CCardFooter,
    CButton
} from '@coreui/react';

const JourneyEdit = ({match})=>{
    const [journeyName,setJourneyName] = useState(null)
    const [JourneyPriority,setJourneyPriority] = useState(null)
    const [jName,setJName] = useState(null)
    const [jpriority,setJPriority] = useState(null)
    const [collapse, setCollapse] = useState(false)
    
    useEffect(()=>{
        let mydata = JSON.stringify({id:`${match.params.id}`})
        fetch(`${baseUrl}/api/v1/journey/journeySingle`,{
            method: 'POST',
            body:mydata,
            headers:{
              "Content-Type":"application/json",
                // 'Content-Type': 'multipart/form-data'
            }
        
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){
                    setJourneyName(data.data.length >= 1?data.data[0].JourneyName:'')
                    setJourneyPriority(data.data.length >= 1?data.data[0].JourneyPriority:'') 
                    setJName(data.data.length >= 1?data.data[0].JourneyName:'')  
                    setJPriority(data.data.length >= 1?data.data[0].JourneyPriority:'')     
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

      const updateJourney = (e)=>{
        e.preventDefault()
        let fullData = JSON.stringify({JourneyName:jName,JourneyPriority:jpriority})
        fetch(`${baseUrl}/api/v1/journey/journeyUpdate/${match.params.id}`,{
          method: 'POST',
          body:fullData,
          headers:{
            "Content-Type":"application/json",
          }
      })
      .then((res)=>res.json())
      .then((data)=>{ 
          console.log(data)
          if(data){
              if(data.status === 'success'){       
                return toast('Update Successful')
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
    }
    const toggle = (e) => {
        setCollapse(!collapse)
        e.preventDefault()
      }
    return(
        <>
        <table className="table table-hover table-outline  d-sm-table">
            <thead className="thead-light">
            <tr>
                <th className="text-center">Journey Name</th>
                <th className="text-center">Journey Priority</th>
            </tr>
            </thead>
            <tbody>
                <tr>  
                    <td className="text-center">
                    <strong >{journeyName}</strong>
                    </td>
                    
                    <td className="text-center">
                    <strong >{JourneyPriority}</strong>
                    </td>
   
                </tr>
            </tbody>
        </table>

        <br/>
        
        <CCard>
          <CCardHeader>
            {journeyName} Edit Form
          </CCardHeader>
          <CCollapse show={collapse}>
            <CCardBody>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>
                        <span><strong>Note:</strong>To avoid bug in the program,</span>
                        <span>The Journey Priority must NOT be changed </span>                    
                    </strong> 
                </div>
                <br/>
                <CFormGroup row>
                    <CCol md="1">
                        <CLabel htmlFor="hf-RegNumber">Journey Name</CLabel>
                    </CCol>
                    <CCol  md="5">
                        <input type="text" value={jName} className="form-control" id="hf-RegNumber" placeholder="Enter journey name..." onChange={(e)=> setJName(e.target.value)} />
                        <CFormText className="help-block">Please enter journey name</CFormText>
                    </CCol>

                    <CCol md="1">
                        <CLabel htmlFor="Surname">Jourdney Priority</CLabel>
                    </CCol>
                    <CCol  md="5">
                    <input type="number" value={jpriority} className="form-control" id="Surname"  onChange={(e)=> setJPriority(e.target.value)} />
                        <CFormText className="help-block">Please enter the priority</CFormText>
                    </CCol>
                </CFormGroup>
                <button className='btn btn-primary' onClick={(e)=>updateJourney(e)}>update</button>
            </CCardBody>
          </CCollapse>
          <CCardFooter>
            <CButton
              color="primary"
              onClick={toggle}
              className={'mb-1'}
            >Edit</CButton>
          </CCardFooter>
        </CCard>
        <ToastContainer/>
        
        </>
    )
}



export default  JourneyEdit