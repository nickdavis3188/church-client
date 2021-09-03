import React,{useState} from "react"
import {
    // CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CFormGroup,
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
// import axios from 'axios';
import baseUrl from '../../../config/config'
import * as XLSX from  'xlsx'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaFileUpload} from "react-icons/fa"
const BulkUpload = ()=>{
    const [fileValues,setFileValue]  = useState({filee:""})
    const [datas,setDatas]  = useState([])
    const formData = new FormData()

   

   const preview = (file)=>{
       const promies = new Promise((resolve,reject)=>{
           const fileReader = new FileReader();
           fileReader.readAsArrayBuffer(file);

           fileReader.onload = (e)=>{
               const myFile = e.target.result;

               const wb = XLSX.read(myFile,{type:'buffer'});
               const ws = wb.Sheets[wb.SheetNames[0]];

               const data = XLSX.utils.sheet_to_json(ws)

                resolve(data)
                    
                
           }

           fileReader.onerror = (error)=>{
               reject(error)
           }
       })

       promies.then((d)=>{
           console.log(d)
           setDatas(d)
       }).catch((e)=>console.log(e))
   }


   formData.append('file',fileValues.filee)
    
   const sendFile = (e)=>{
       e.preventDefault()
      let sendData = JSON.stringify(datas)
    console.log(datas)

        let token = JSON.parse(localStorage.getItem('Token'));

        fetch(`${baseUrl}/api/v1/member/bulkUpload`,{
            method: 'POST',
            body:sendData,
            headers:{
                "Content-Type":"application/json",
                'authorization':`Bearer ${token}`
            }
        
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){
                  return toast('Upload successful')
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
        <CCard>
        <CCardHeader>
            <h5>Make your bulk upload hear</h5>
        </CCardHeader>
        <CCardBody>
            <span><strong>Note: </strong><p>Only an Excel file is accepted</p></span> 
            <br/>
            <CFormGroup row>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile"  onChange={(e)=>{
                        const file = e.target.files[0];
                        setFileValue({filee:file})
                        preview(file)
                    }}/>
                    <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
            </CFormGroup>
            <br/>
            {/* //setFileValue({file:e.target.files[0]}) */}
            <div style={{overflowX:'auto', maxHeight:'300px'}} class="table-responsive-xl">    
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">MemberID</th>
                        <th scope="col">RegNumber</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Address</th>
                        <th scope="col">PhoneNo</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                        <th scope="col">MaritalStatus</th>
                        <th scope="col">WeddingAnniversary</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Expertise</th>
                        <th scope="col">MemberTypeName</th>
                        <th scope="col">Status</th>
                        <th scope="col">DateJoinedTKA</th>
                        <th scope="col">ALTDate</th>
                        <th scope="col">MinistryID1</th>
                        <th scope="col">MinistryID2</th>
                        <th scope="col">MinistryID3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((e,i)=>{
                            return(
                            <tr key={i}>
                                <th scope="row">{e.MemberID}</th>
                                <td>{e.RegNumber}</td>
                                <td>{e.Surname}</td>
                                <td>{e.Address}</td>
                                <td>{e.PhoneNo}</td>
                                <td>{e.Sex}</td>
                                <td>{e.Email}</td>
                                <td>{e.DOB}</td>
                                <td>{e.MaritalStatus}</td>
                                <td>{e.WeddingAnniversary}</td>
                                <td>{e.Occupation}</td>
                                <td>{e.Expertise}</td>
                                <td>{e.MemberTypeName}</td>
                                <td>{e.Status}</td>
                                <td>{e.DateJoinedTKA}</td>
                                <td>{e.ALTDate}</td>
                                <td>{e.MinistryID1}</td>
                                <td>{e.MinistryID2}</td>
                                <td>{e.MinistryID3}</td>
                            </tr>)
                        })}
                        
                    </tbody>
                    </table>
            </div>
        </CCardBody>
        <CCardFooter>
        <button className="btn btn-primary px-4"  onClick={(e)=>sendFile(e)} ><FaFileUpload/>Upload</button>
          <button  className="btn btn-danger" onClick={(e)=>{
                e.preventDefault()
                window.location.reload()
              }} ><CIcon name="cil-ban" /> Reset</button>
          <ToastContainer/>
        </CCardFooter>
      </CCard>
      </>
    )
}
export default BulkUpload