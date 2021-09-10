import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'

const EditMember = ({match})=>{
    // let mydata = JSON.stringify({word:`${match.params.id}`}
    // /memberUpdate/:id
    const [fname,setFname] = useState(null)
    const [sname,seSname] = useState(null)
    const [address,setaddress] = useState(null)
    const [phone,setphone] = useState(null)
    const [email,setemail] = useState(null)
    const [sex,setsex] = useState(null)
    const [dob,setdob] = useState(null)
    const [maristat,setmaristat] = useState(null)
    const [wedanny,setwedanny] = useState(null)
    const [ocupa,setocupa] = useState(null)
    const [busin,setbusin] = useState(null)
    const [exper,setexper] = useState(null)
    const [datjo,setdatjo] = useState(null)



    const [details, setDetails] = useState({
        FirstName:'',
        Surname:'',
        Address:'',
        PhoneNo:'',
        Email:'',
        RegNumber:'',
        Sex:'',
        DOB:'',
        MaritalStatus:'',
        WeddingAnniversary:'',
        Ocupation:'',
        Business:'',
        Expertise:'',
        DateJoinedTKA:'',
        journeyAttend:'',
        id:'',
        currentJourney:'',
        nextJourney:''
       
      })
      useEffect(()=>{
        let mydata = JSON.stringify({word:`${match.params.id}`})
        fetch(`${baseUrl}/api/v1/member/getSingleMember`,{
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
                    setDetails({
                        FirstName:data.data[0].FirstName?data.data[0].FirstName:"",
                        Surname:data.data[0].Surname?data.data[0].Surname:"",
                        Address:data.data[0].Address?data.data[0].Address:"",
                        PhoneNo:data.data[0].PhoneNo?data.data[0].PhoneNo:"",
                        Email:data.data[0].Email?data.data[0].Email:"",
                        RegNumber:data.data[0].RegNumber?data.data[0].RegNumber:"",
                        Sex:data.data[0].Sex?data.data[0].Sex:"",
                        DOB:data.data[0].DOB?data.data[0].DOB:"",
                        MaritalStatus:data.data[0].MaritalStatus?data.data[0].MaritalStatus:"",
                        WeddingAnniversary:data.data[0].WeddingAnniversary?data.data.WeddingAnniversary:"",
                        Ocupation:data.data[0].Ocupation?data.data[0].Ocupation:"",
                        Business:data.data[0].Business?data.data[0].Business:"",
                        Expertise:data.data[0].Expertise?data.data[0].Expertise:"",
                        DateJoinedTKA:data.data[0].DateJoinedTKA?data.data[0].DateJoinedTKA:"",            
                        ImageUrl:data.data[0].ImageUrl?data.data[0].ImageUrl:"",
                        journeyAttend:data.data[0].journeyAttend?data.data[0].journeyAttend:"",
                        id:data.data[0]._id?data.data[0]._id:"",
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

      const submitUpdate  = (e)=>{
          e.preventDefault()
          let myUpdate = {};

          if(fname){
              myUpdate.FirstName =fname
          }
          if(sname){
              myUpdate.Surname = sname
          }
          if(address){
              myUpdate.Address = address
          }
          if(phone){
              myUpdate.PhoneNo = phone
          }
          if(email){
              myUpdate.Email = email
          }
          if(sex){
              myUpdate.Sex = sex
          }
          if(dob){
              myUpdate.DOB = dob
          }
          if(maristat){
              myUpdate.MaritalStatus = maristat
          }
          if(wedanny){
              myUpdate.WeddingAnniversary = wedanny
          }
          if(ocupa){
              myUpdate.Ocupation = ocupa
          }
          if(busin){
              myUpdate.Business = busin
          }
          if(exper){
              myUpdate.Expertise =exper
          }
          if(datjo){
              myUpdate.DateJoinedTKA = datjo
          }


          console.log(myUpdate)
            let fullData = JSON.stringify(myUpdate)
          fetch(`${baseUrl}/api/v1/member/memberUpdate/${details.id}`,{
            method: 'POST',
            body:fullData 
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
        <div class="well">
            <ul class="nav nav-tabs">
            <li class="active"><a href="#home" data-toggle="tab">Memner</a></li>
            {/* <li><a href="#profile" data-toggle="tab">Password</a></li> */}
            </ul>
            <div id="myTabContent" class="tab-content">
                <div class="tab-pane active in" id="home">
                    <form id="tab" onSubmit={(e)=> submitUpdate(e)}>
                        <label>FirstName</label>
                        <input type="text" value={details.FirstName} class="input-xlarge"  onChange={(e)=> setFname(e.target.value)}/>

                        <label>Surname</label>
                        <input type="text" value={details.Surname} class="input-xlarge"  onChange={(e)=> seSname(e.target.value)}/>

                        <label>Address</label>
                        <input type="text" value={details.Address} class="input-xlarge"  onChange={(e)=> setaddress(e.target.value)} />

                        <label>PhoneNo</label>
                        <input type="number" value={details.PhoneNo} class="input-xlarge" onChange={(e)=> setphone(e.target.value)}/>

                        <label>Sex pls type Male or Female</label>
                        <input type="text" value={details.Sex} class="input-xlarge" onChange={(e)=> setsex(e.target.value)} />

                        <label>DOB</label>
                        <input type="date" value={details.DOB?new Date(details.DOB).toLocaleDateString():''} class="input-xlarge" onChange={(e)=>setdob(e.target.value)}/>
                        
                        <label>MaritalStatus pls type Married or Single </label>
                        <input type="text" value={details.MaritalStatus} class="input-xlarge" onChange={(e)=> setmaristat(e.target.value)}/>

                        <label>WeddingAnniversary</label>
                        <input type="date" value={details.WeddingAnniversary?new Date(details.WeddingAnniversary).toLocaleDateString():''} class="input-xlarge" onChange={(e)=> setwedanny(e.target.value)}/>

                        <label>Email</label>
                        <input type="email" value={details.Email} class="input-xlarge"  onChange={(e)=> setemail(e.target.value)}/>

                        <label>Ocupation</label>
                        <input type="text" value={details.Ocupation} class="input-xlarge" onChange={(e)=> setocupa(e.target.value)}/>

                        <label>Expertise</label>
                        <input type="text" value={details.Expertise} class="input-xlarge" onChange={(e)=> setexper(e.target.value)}/>

                        <label>Busness</label>
                        <input type="text" value={details.Expertise} class="input-xlarge" onChange={(e)=> setbusin(e.target.value)}/>

                        <label>DateJoinedTKA</label>
                        <input type="date" value={details.DateJoinedTKA?new Date(details.DateJoinedTKA).toLocaleDateString():''} class="input-xlarge" onChange={(e)=> setdatjo(e.target.value)}/>

                        <div>
                            <button type='submit' class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )

}

export default  EditMember