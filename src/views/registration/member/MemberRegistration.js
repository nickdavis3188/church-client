import React,{useState,useRef ,useEffect}from "react"
import { useHistory} from 'react-router-dom'
import {
    // CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CLabel,
    CProgress
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

// import axios from 'axios';
import baseUrl from '../../../config/config'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaSearch} from "react-icons/fa"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'



const MemberRegistration = ({User})=>{
  const formdata = new FormData()
  const [fname,setFname] = useState('')
  const [sname,seSname] = useState('')
  const [address,setaddress] = useState('')
  const [phone,setphone] = useState('')
  const [email,setemail] = useState('')
  const [regno,setregno] = useState('')
  const [sex,setsex] = useState('')
  const [dob,setdob] = useState('')
  const [maristat,setmaristat] = useState('')
  const [wedanny,setwedanny] = useState('')
  const [ocupa,setocupa] = useState('')
  const [busin,setbusin] = useState('')
  const [exper,setexper] = useState('')
  const [datjo,setdatjo] = useState('')
  const [fileValue,setFileValue] = useState('')
  

  const [searchValue, setWord] = useState('')
  const [result1,setResult] = useState([])
  // const [journeyAtt,setJourneyAtt] = useState(0)
  const ref = useRef();
  const dropMe=useRef(null)
  const dropDown2=useRef(null)
  useEffect(()=>{
    (dropDown2.current).onchange=(e)=>{
      // console.log(e.target.options[e.target.options.selectedIndex].value)
      setsex(e.target.options[e.target.options.selectedIndex].value)
    }
  })

  useEffect(()=>{
    (dropMe.current).onchange=(e)=>{
      // console.log(e.target.options[e.target.options.selectedIndex].value)
      setmaristat(e.target.options[e.target.options.selectedIndex].value)
    }
  })

  formdata.append('Firstname',fname)
  formdata.append('Surname',sname)
  formdata.append('Address',address)
  formdata.append('PhoneNo',phone)
  formdata.append('Email',email)
  formdata.append('RegNumber',regno)
  formdata.append('Sex',sex)
  formdata.append('Dob',dob)
  formdata.append('MaritalStatus',maristat)
  formdata.append('WeddingAnniversary',wedanny)
  formdata.append('Occupation',ocupa)
  formdata.append('Business',busin)
  formdata.append('Expertise',exper)
  formdata.append('DateJoinedTKA',datjo)
  formdata.append('memberImg',fileValue)

 

 

  const submitForm = async (e)=>{
    e.preventDefault()
    // console.log(dob)

    const submitResponse = await fetch(`${baseUrl}/api/v1/member/memberRegistration`,{
        method: 'POST',
        body:formdata
    })
	const subResData = await submitResponse.json()
	if(subResData){
		if(subResData.status === 'success'){       
		  return toast('Member Registration Successful')
		}else{
		  if(subResData.status === 'fail'){
			return toast(subResData.message?subResData.message:'')
		  }else{
			  if(subResData.status === 'error'){
				return toast(subResData.message?subResData.message:'')
			  }
		  }
        }      
    }
  }
    // .then((res)=>res.json())
    // .then((data)=>{ 
        // console.log(data)
        // if(data){
            // if(data.status === 'success'){       
              // return toast('Member Registration Successful')
            // }else{
              // if(data.status === 'fail'){
                // return toast(data.message?data.message:'')
              // }else{
                  // if(data.status === 'error'){
                    // return toast(data.message?data.message:'')
                  // }
              // }
          // }      
        // }
    // })
    // .catch((err)=>{
        // if(err){
        // console.log(err) 
        // alert(err)
        // }
    // }) 
  


  const searchUser = async(e)=>{
    e.preventDefault()
    let mydata = JSON.stringify({word:searchValue})
    const serachResponse = await fetch(`${baseUrl}/api/v1/member/getSingleMember`,{
        method: 'POST',
        body:mydata,
        headers:{
          "Content-Type":"application/json",
        }  
    })
	
	const serResData = await serachResponse.json()
	if(serResData){
		if(serResData.status === 'success'){
		  // console.log(data.data[0].journeyAttend?data.data[0].journeyAttend.length:'')
		  // setJourneyAtt(data.data[0].journeyAttend.length >= 1?data.data[0].journeyAttend.length:0)
		  setResult(serResData.data)
		}else{
			if(serResData.status === 'fail'){
			  return toast(serResData.message?serResData.message:'')
			}else{
				if(serResData.status === 'error'){
				  return toast(serResData.message?serResData.message:'')
				}
			}
		}   
    }
  }
    // .then((res)=>res.json())
    // .then((data)=>{ 
        // console.log(data)
        // if(data){
            // if(data.status === 'success'){
              // console.log(data.data[0].journeyAttend?data.data[0].journeyAttend.length:'')
              // setJourneyAtt(data.data[0].journeyAttend.length >= 1?data.data[0].journeyAttend.length:0)
              // setResult(data.data)
            // }else{
                // if(data.status === 'fail'){
                  // return toast(data.message?data.message:'')
                // }else{
                    // if(data.status === 'error'){
                      // return toast(data.message?data.message:'')
                    // }
                // }
            // }   
        // }
    // })
    // .catch((err)=>{
        // if(err){
			// console.log(err) 
			// alert(err)
        // }
    // }) 
  

  const history = useHistory()

  // let num = props.journey.length
   
		// const searchRes = result1?<SearchResult result={result1} User2={User}/>:''
	const deleteAdmin = async(a,i)=>{
		 console.log(a,i)
      let dateAttend = JSON.stringify({id:a})
       const deleteResponse = await fetch(`${baseUrl}/api/v1/member/deleteMember`,{
          method: 'POST',
          body:dateAttend,
          headers:{
            "Content-Type":"application/json",
          }
      })
	  const delResData = await deleteResponse.json()
	  if(delResData){
            if(delResData.status === 'success'){  
                    //  let newData = result1.splice(i,1)
                let filterData = result1.filter((e)=> e._id !== a)
                setResult(filterData)
                return toast('Delete successfully')
            }else{
                if(delResData.status === 'fail'){
                    return toast(delResData.message?delResData.message:'')
                }else{
				  if(delResData.status === 'error'){
					return toast(delResData.message?delResData.message:'')
				  }
                }
			} 
		}			
    }
	
      // .then((res)=>res.json())
      // .then((data)=>{ 
         
          // if(data){
              // if(data.status === 'success'){  
                     // let newData = result1.splice(i,1)
                // let filterData = result1.filter((e)=> e._id !== a)
                // setResult(filterData)
                // return toast('Delete successfully')
              // }else{
                  // if(data.status === 'fail'){
                    // return toast(data.message?data.message:'')
                  // }else{
                      // if(data.status === 'error'){
                        // return toast(data.message?data.message:'')
                      // }
                  // }
              // }  
         // }
      // })
      // .catch((err)=>{
          // if(err){
          // console.log(err) 
          // alert(err)
          // }
      // })
    
    


	const checkJouurney = async(idF)=>{
		
		let userId2 = JSON.stringify({id:idF})
		const unAch = await fetch(`${baseUrl}/api/v1/member/checkJourneyM`,{
          method: 'POST',
		  body:userId2,
          headers:{
              "Content-Type":"application/json",
            }
          } 
        )
        const data = await unAch.json()
        if(data.status === 'success'){
			console.log('jCh',data)
		 
        }else{
          if(data.status === 'fail'){
            console.log('jC',data.status?data.status:'')
          }
        }
	}
	
	// const checkJouurney22 = async(id)=>{
		// console.log('idddd',id)
		// let userId2 = JSON.stringify({id:id})
		// const unAch = await fetch(`${baseUrl}/api/v1/member/confirmJourney`,{
          // method: 'POST',
		  // body:userId2,
          // headers:{
              // "Content-Type":"application/json",
            // }
          // } 
        // )
        // const data = await unAch.json()
        // if(data.status === 'success'){
			// console.log('jCh',data)
		 
        // }else{
          // if(data.status === 'fail'){
            // console.log('jC',data.status?data.status:'')
          // }
        // }
	// }
	
    return(
        <>
			<form>
				<div className="input-group mb-3">
					
					<input type="text" className="form-control" placeholder="Search members by Surname RegNumber and PhoneNo" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>setWord(e.target.value)}/>
					<div className="input-group-append">
						<button className="input-group-text" id="basic-addon2" onClick={(e)=>searchUser(e)}><FaSearch/></button>
					</div>
					
				</div>
			</form>
		{
			result1.length >= 1?
				(
				 <table className="table table-hover table-outline">
				<thead className="thead-light">
					  <tr>
					  <th className="text-center"><CIcon name="cil-people" /></th>
					  <th className="text-center">Member</th>
					  <th className="text-center">PhoneNo</th>
					  <th className="text-center">Email</th>
					  <th className="text-center">Journey Progress</th>
					  <th className="text-center">Action</th>
					  </tr>
					</thead>
					<tbody>
					  {result1.map((e,i)=>{
				
						return(
							<tr key={i}>
							  <td className="text-center">
								<div className="c-avatar">
								<img src={e.ImageUrl} className="c-avatar-img" alt="admin" />
								<span className="c-avatar-status bg-success"></span>
								</div>
							  </td>
							  
							  <td>
								<div>{`${e.Surname} ${e.Firstname}`}</div>
								<div className="small text-muted">
								<span>New</span> |Registerd on {e.createdAt?new Date(e.createdAt).toLocaleDateString():''}
								</div>
							  </td>
							  
							  <td>
								<strong>{e.PhoneNo}</strong>
							  </td>
							  
							  <td>
								<strong>{e.Email}</strong>
							  </td>
							  
							  <td>
								<div className="clearfix">
								<div className="float-left">
								  <strong>
								   {e.journeyAttend.filter((a)=> a.Status === 'New').length >= 1 ? 20*e.journeyAttend.filter((a)=> a.Status === 'New').length : 0}%
								  </strong>
								</div>
								</div>
								<CProgress className="progress-xs" color="success" value= {e.journeyAttend.filter((a)=> a.Status === 'New').length >= 1?20*e.journeyAttend.filter((a)=> a.Status === 'New').length:0} />
							  </td>
							  <td> 
								<DropdownButton className="text-center" id="dropdown-item-button" title="Action" variant="secondary">
								  <Dropdown.ItemText>TAKE ACTION</Dropdown.ItemText>
								  <Dropdown.Item as="button" onClick={()=>{
									  history.push(`/info/${e._id}`)
									  }} >INFO</Dropdown.Item>	
								  <Dropdown.Item as="button" onClick={()=>{
									  history.push(`/journey/${e._id}`)
									  checkJouurney(e._id)								 
									}}>ATTENDANCE</Dropdown.Item>	
								  {
									  User.role === "admin"?
									  <>
									  <Dropdown.Item as="button" onClick={()=> history.push(`/Members/${e._id}`)}>EDIT</Dropdown.Item>
									  <Dropdown.Item as="button" onClick={()=>deleteAdmin(e._id,i)}>DELETE</Dropdown.Item>
									  </>
									  :''
								  }
								  
								</DropdownButton>						 
							  </td> 
							</tr>
						)
					  })}				
					</tbody>
				  </table>
			)
			:''
		}
	
        <CCard>
        <CCardHeader>
          Membership
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-RegNumber">RegNumber</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={regno} className="form-control" id="hf-RegNumber" placeholder="Enter RegNumber..." onChange={(e)=> setregno(e.target.value)} />
                <CFormText className="help-block">Please enter member RegNumber</CFormText>
              </CCol>
              <CCol md="1">
                <CLabel htmlFor="Surname">Surname</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="text" value={sname} className="form-control" id="Surname" placeholder="Enter Surname..." onChange={(e)=> seSname(e.target.value)} />
                <CFormText className="help-block">Please enter member Surname</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-fName">First Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={fname} className="form-control" id="hf-fName" placeholder="Enter First Name..." onChange={(e)=> setFname(e.target.value)} />
                <CFormText className="help-block">Please enter member first name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-PhoneNo">PhoneNo</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="text" value={phone} className="form-control" id="hf-PhoneNo" placeholder="Enter PhoneNo..." onChange={(e)=> setphone(e.target.value)} />
                <CFormText className="help-block">Please enter member PhoneNo</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-Address">Address</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={address} className="form-control" id="hf-Address" placeholder="Enter Address..." onChange={(e)=> setaddress(e.target.value)} />
                <CFormText className="help-block">Please enter member Address</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hr-sex">Sex</CLabel>
              </CCol>
              <CCol  md="5">
                <select className="form-control"  ref={dropDown2}>
                  <option value='0'>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <CFormText className="help-block">Please select member Sex</CFormText>
              </CCol>
     
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Email">Email</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="email" value={email} className="form-control" id="hf-Email" placeholder="Enter Email..." onChange={(e)=> setemail(e.target.value)} />
                <CFormText className="help-block">Please enter member Email</CFormText>
              </CCol>
           

              <CCol md="1">
                <CLabel htmlFor="date-input">DOB</CLabel>
              </CCol>
              <CCol  md="5">           
                <input type="date" value={dob} className="form-control" id="date-input" name="hr-dob" placeholder="Dob.." onChange={(e)=> setdob(e.target.value)} />
                <CFormText className="help-block">Please enter member Date Of Birth</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-MaritalStatus">Marital Status</CLabel>
              </CCol>
              <CCol  md="5">
                <select className="form-control" ref={dropMe}     >
                  <option value="0">Please select</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Seprated">Seprated</option>
                </select>
                <CFormText className="help-block">Please select member Marital Status</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Surname">Wedding Anniversary</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="date" value={wedanny} id="hf-WeddingAnniversary" name="hf-Wedding Anniversary" className="form-control" onChange={(e)=> setwedanny(e.target.value)} />
                <CFormText className="help-block">Please enter member Wedding Anniversary</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Occupation">Occupation</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-Occupation" value={ocupa} className="form-control" name="hf-Occupation" placeholder="Enter Occupation..." onChange={(e)=> setocupa(e.target.value)} />
                <CFormText className="help-block">Please enter member Occupation</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Business">Business</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" value={busin} id="hf-Business" name="hf-Business" placeholder="Enter Business..." onChange={(e)=> setbusin(e.target.value)}/>
                <CFormText className="help-block">Please enter member Business</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-fName">Expertise</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" value={exper} id="hf-Expertise" name="hf-Expertise" placeholder="Enter Expertise..." onChange={(e)=> setexper(e.target.value)} />
                <CFormText className="help-block">Please enter member Expertise</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Business">Passport</CLabel>
              </CCol>
              <CCol  md="5">
              <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile"  onChange={(e)=>setFileValue(e.target.files[0])} ref={ref}/>
                    <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
                <CFormText className="help-block">please provide your passport (optional)</CFormText>
              </CCol>

              
            </CFormGroup>


         
            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-DateJoinedTKA">Date Joined TKA</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="date" value={datjo} className="form-control" id="date-DateJoinedTKA" name="hr-DateJoinedTKA" placeholder="DateJoinedTKA.." onChange={(e)=> setdatjo(e.target.value)} />
                <CFormText className="help-block">Please enter DateJoinedTKA</CFormText>
              </CCol>
              

              <CCol md="1">
            
              </CCol>
              <CCol  md="5">
              </CCol>

            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <button type="button" className="btn btn-primary" onClick={(e)=> submitForm(e)}><CIcon name="cil-scrubber"/>submit</button>
          <button type="reset" className="btn btn-danger" onClick={()=>{
            setFname('')
            seSname('')
            setaddress('')
            setphone('')
            setemail('')
            setregno('')
            setdob('')
            setwedanny('')
            setocupa('')
            setbusin('')
            setexper('')
            setdatjo('')
            ref.current.value = ""
          } } ><CIcon name="cil-ban" /> Reset</button>
            <ToastContainer/>
        </CCardFooter>
      </CCard>
      </>
    )
}

export default MemberRegistration