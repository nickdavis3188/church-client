import React,{useState,useEffect}from "react"
import { useHistory} from 'react-router-dom'
import baseUrl from '../../config/config'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Manage = ({User})=>{
    const history = useHistory()
    const [result1,setResult] = useState([])
    // let num = props.journey.length
    useEffect(()=>{
      async function loadfun(){
        let userId = JSON.stringify({id:User._id});
        const reval = await fetch(`${baseUrl}/api/v1/auth/allAdmin`,{
            method: 'POST',
            body:userId,
              headers:{
                "Content-Type":"application/json"
              }
            } 
          )
          const data = await reval.json()
          if(data.status === 'success'){
            setResult(data.data.length >= 1?data.data:[])
          }else{
            if(data.status === 'not found'){
              toast(data.message?data.message:'')
            }
          }
      }
      
      loadfun()
    },[])
    const deleteAdmin = (a,i)=>{
      let dateAttend = JSON.stringify({id:a})
      fetch(`${baseUrl}/api/v1/auth/deleteAdmin`,{
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
                    //  let newData = result1.splice(i,1)
                let filterData = result1.filter((e)=> e._id !== a)
                setResult(filterData)
                return toast('Delete successfully')
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
      <CCard>
      <CCardHeader>
        USER MANGEMENT      
      </CCardHeader>
      <CCardBody>
      <table className="table table-hover table-outline ">
      <thead className="thead-light">
        <tr>
        <th className="text-center"><CIcon name="cil-people" /></th>
        <th className="text-center">User</th>
        <th className="text-center">Name</th>
        <th className="text-center">Email</th>
        <th className="text-center">Role</th>
        <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {result1.map((e,i)=>{
          return(
              <tr  key={i}>
                <td className="text-center">
                  <div className="c-avatar">
                  <img src={e.photoUrl} className="c-avatar-img" alt="admin" />
                  <span className="c-avatar-status bg-success"></span>
                  </div>
                </td>
                
                <td>
                  {/* <div>{`${e.Surname} ${e.Firstname}`}</div> */}
                  <div className="small text-muted  text-center">
                  <span>New</span> |Registerd on {e.createdAt?new Date(e.createdAt).toLocaleDateString():''}
                  </div>
                </td>
                
                <td>
                  <strong className="text-center">{e.fullName}</strong>
                </td>
                
                <td>
                  <strong className="text-center">{e.email}</strong>
                </td>
                
                <td>                
                  <strong className={e.role === 'admin'?'badge badge-primary text-center':'badge badge-info text-center'}>{e.role}</strong>
                </td>               
                <td>                
                  <button className='badge badge-danger text-center' onClick={()=>deleteAdmin(e._id,i)}>DELETE</button>
                </td>               
              </tr>
          )
        })}
      
      </tbody>
    </table>
    </CCardBody>
        <CCardFooter>
    <ToastContainer/>
        </CCardFooter>
      </CCard>
    )
  }

export default Manage