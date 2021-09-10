import React,{useState,useEffect }from "react"
// import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'

import {
    CFormGroup,
    CFormText,
    CLabel,
    CCol
} from '@coreui/react';

const JourneyEdit = ({match})=>{

    const [journy,setJourney] = useState({
        name:"",
        priority:""
    })
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
                    setJourney({
                        name:data.data.JourneyName,
                        priority:data.data.JourneyPriority
                    })        
                  return toast('successful')
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
                    <td>
                    <strong>{journy.name}</strong>
                    </td>
                    
                    <td>
                    <strong>{journy.priority}</strong>
                    </td>
   
                </tr>
            </tbody>
        </table>

        <br/>
        < EditJ id={match.params.id}/>
        <ToastContainer/>
        
        </>
    )
}

const EditJ = (props)=>{
    const [jName,setJName] = useState(null)
    const [jpriority,setJPriority] = useState(null)

    const updateJourney = (e)=>{
        e.preventDefault()
        let fullData = JSON.stringify({JourneyName:jName,JourneyPriority:jpriority})
        fetch(`${baseUrl}/api/v1/journey/journeyUpdate/${props.id}`,{
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
    return(
        <>
            <p>
                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                EDIT
            </a>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <CFormGroup row>
                    <CCol md="1">
                        <CLabel htmlFor="hf-RegNumber">Journey Name</CLabel>
                    </CCol>
                    <CCol  md="5">
                        <input type="text" className="form-control" id="hf-RegNumber" placeholder="Enter journey name..." onChange={(e)=> setJName(e.target.value)} />
                        <CFormText className="help-block">Please enter journey name</CFormText>
                    </CCol>

                    <CCol md="1">
                        <CLabel htmlFor="Surname">Jourdney Priority</CLabel>
                    </CCol>
                    <CCol  md="5">
                    <input type="number" className="form-control" id="Surname"  onChange={(e)=> setJPriority(e.target.value)} />
                        <CFormText className="help-block">Please enter the priority</CFormText>
                    </CCol>
                </CFormGroup>
                <button className='btn btn-primary' onClick={(e)=>updateJourney(e)}>update</button>
            </div>
            </div>
        </>
    )
}

export default  JourneyEdit