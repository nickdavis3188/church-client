import React,{useState,useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  CWidgetIcon,
  CCol,
  CRow,
} from '@coreui/react';
// import axios from 'axios';
import baseUrl from '../../config/config';

import {FaFemale,FaMale,FaAlignJustify} from "react-icons/fa"
import {ImUsers} from "react-icons/im";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaSearch} from "react-icons/fa"
// import '../../style.css'

const Dashboard = () => {
 
  return (
    <>
      <WidgetSimple/>   
      <br />  
      <Chat/>
      <ToastContainer/>
    </>
  )
}

const WidgetSimple = ()=>{
  
  const [widgetValues,setWidgetValue]  = useState({
    Total:'',
    Male:'',
    Female:''
  })
  
const loadData = async ()=>{
  let res =  await fetch(`${baseUrl}/api/v1/dashborad/static`,{
        method: 'GET',
    })
   const data = await res.json()
   // console.log(data.data) 
  if(data){
      if(data.status === 'success'){
        setWidgetValue({Total:data.data.total?data.data.total:'',Male:data.data.male?data.data.male:'',Female:data.data.female?data.data.female:''})
        // return toast('Dashborad set')
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
}
    // })
    // .catch((err)=>{
    //     if(err){
    //     console.log(err) 
    //     alert(err)
    //     }
    // })


  useEffect(()=>{
   async function loadMyData(){
      await loadData()
   }

   loadMyData()


  },[])

  return(
    <>
    <CRow>
    <CCol xs="12" sm="6" lg="4">
      <CWidgetIcon text="Members" header={`${widgetValues.Total}`} color="primary">
        <ImUsers width={24} />
      </CWidgetIcon>
    </CCol>
    <CCol xs="12" sm="6" lg="4">
      <CWidgetIcon text="Male" header={`${widgetValues.Male}`} color="warning">
        <FaMale />
      </CWidgetIcon>
    </CCol>
    <CCol xs="12" sm="6" lg="4">
      <CWidgetIcon text="Female" header={`${widgetValues.Female}`} color="info">
        <FaFemale />
      </CWidgetIcon>
    </CCol>
    </CRow>
    
    </>
  )
}






const Chat = (props) =>{
  // let token = localStorage.getItem('Token')
  const [yearValues,setYearValue]  = useState()

  const [maleArr,setMaleArr]  = useState([])
  const [femaleArr,setFemaleArr]  = useState([])
  
  
  const [journey101,setJourney101]= useState([])
  const [journey201,setJourney201]= useState([])
  const [journey202,setJourney202]= useState([])
  const [journey301,setJourney301] = useState([])
  const [journey401,setJourney401]= useState([])
  
 const attendanceSelectedYear = ()=>{
	  let getYearp =JSON.stringify({ya:yearValues? yearValues: new Date().getFullYear()})
    fetch(`${baseUrl}/api/v1/dashborad/attendanceDashborad`,{
        method: 'POST',
        body:getYearp,
        headers:{
          "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        // console.log(data)
        if(data){
            if(data.status === 'success'){  
                console.log('ATTD',data.data)
				setJourney101(data.data.levle1.length >= 1?data.data.levle1:[])    
				setJourney201(data.data.levle2.length >= 1?data.data.levle2:[])
				setJourney202(data.data.levle3.length >= 1?data.data.levle3:[])
				setJourney301(data.data.levle4.length >= 1?data.data.levle4:[])
				setJourney401(data.data.levle5.length >= 1?data.data.levle5:[])
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
 
 const memberSelecterYear = ()=>{
	  let getYearp11 =JSON.stringify({ya:yearValues?yearValues:new Date().getFullYear()})

      fetch(`${baseUrl}/api/v1/dashborad/dashboradStatistics`,{
          method: 'POST',
          body:getYearp11,
          headers:{
            "Content-Type":"application/json",
          }
      })
      .then((res)=>res.json())
      .then((data)=>{ 
          
          if(data){
              if(data.status === 'success'){
                setMaleArr(data.data.male || data.data.Male ?data.data.male ||data.data.Male:[])
                setFemaleArr(data.data.female || data.data.Female?data.data.female || data.data.Female:[])
				console.log('Dboard',data.data)
                // setDashboardValues({Male:,Female:})
                // return toast('success')
              }else{
                  if(data.status === 'fail'){
                    return toast(data.message?data.message:'')
                  }else{
                      if(data.status === 'error'){
                        return toast(data.message?data.message:'')
                      }
                  }

              }        
          }``````````````````````````````
      })
      .catch((err)=>{
          if(err){
          // console.log(err) 
         // alert(err)
          }
      })
 }
  const trigerValue = (e)=>{
      e.preventDefault()
	  
      attendanceSelectedYear()
      memberSelecterYear()
  }


  useEffect(()=>{
      
    let getYearp =JSON.stringify({ya:yearValues? yearValues: new Date().getFullYear()})
    fetch(`${baseUrl}/api/v1/dashborad/dashboradStatistics`,{
        method: 'POST',
        body:getYearp,
        headers:{
          "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        // console.log(data)
        if(data){
            if(data.status === 'success'){  
              // console.log(data.data.male)
              // console.log(data.data.female)
             
                setMaleArr(data.data.male.length >= 1?data.data.male:[])
        
                setFemaleArr(data.data.female.length >= 1?data.data.female:[])

              // setDashboardValues({Male:data.data.Male?data.data.Male:[],Female:data.data.Female?data.data.Female:[]})    
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
  
  
  //attendance useEffect
   useEffect(()=>{
      
    let getYearp =JSON.stringify({ya:yearValues? yearValues: new Date().getFullYear()})
    fetch(`${baseUrl}/api/v1/dashborad/attendanceDashborad`,{
        method: 'POST',
        body:getYearp,
        headers:{
          "Content-Type":"application/json",
        }
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        // console.log(data)
        if(data){
            if(data.status === 'success'){  
                console.log('ATTD',data.data)
				setJourney101(data.data.levle1.length >= 1?data.data.levle1:[])    
				setJourney201(data.data.levle2.length >= 1?data.data.levle2:[])
				setJourney202(data.data.levle3.length >= 1?data.data.levle3:[])
				setJourney301(data.data.levle4.length >= 1?data.data.levle4:[])
				setJourney401(data.data.levle5.length >= 1?data.data.levle5:[])
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
  //End of attendance useEffect
  
  const monthDisplay = (values1,values2)=>{
    let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let returnValues =[]
    if(values1.length >= values2.length){
      // let valueLength = values1.length;
      for(let i = 0; i < values1.length; i++){
        returnValues.push(month[i])
      }
  
    }else{
      for(let v = 0; v < values2.length; v++){
        returnValues.push(month[v])
      }
    }
    return returnValues
  }
  
  
  const chatOptions = ()=>{
    const options = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Registerd Member column chart'
      },
      xAxis: {
          categories:monthDisplay(maleArr.length >= 1?maleArr:[],femaleArr.length >= 1?femaleArr:[])
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Number Of Members'
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
      },
      legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [
        {
          name: 'Male',
          data:maleArr.length >= 1?maleArr:[]
        },
        {
          name: 'Female',
          data:femaleArr.length >= 1?femaleArr:[]
        }, 
       
      ]
    }
    return options
  
  }
  

 
  	const chatOption1 = ()=>{
		const mainChat ={
		  chart: {
			type: 'column'
		  },
		  title: {
			text: 'Journey Attend Chart Report'
		  },
		  xAxis: {
			categories: monthDisplay(journey101.length >= 1?journey101:[],journey201.length >= 1?journey201:[])
		  },
		  yAxis: {
			min: 0,
			title: {
			  text: 'Number Of Members'
			},
			stackLabels: {
			  enabled: true,
			  style: {
				fontWeight: 'bold',
				color: ( // theme
				  Highcharts.defaultOptions.title.style &&
				  Highcharts.defaultOptions.title.style.color
				) || 'gray'
			  }
			}
		  },
		  legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
			  Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		  },
		  tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		  },
		  plotOptions: {
			column: {
			  stacking: 'normal',
			  dataLabels: {
				enabled: true
			  }
			}
		  },
		  series: [{
			name: 'journey101',
			data: journey101.length >= 1?journey101:[]
		  }, {
			name: 'journey201',
			data: journey201.length >= 1?journey201:[]
		  }, {
			name: 'journey202',
			data: journey202.length >= 1?journey202:[]
		  }, {
			name: 'journey301',
			data: journey301.length >= 1?journey301:[]
		  }, {
			name: 'journey401',
			data: journey401.length >= 1?journey401:[]
		  }
		  ]
		}
		
		return mainChat;
	}

  // let currentYear = new Date().getFullYear()
  return(
    <div>
       <div>
        <h5>Select Year</h5>
        <input type="number"  placeholder="YYYY" min="2017" max="2100" style={{width:'200px'}} onChange={(e)=>setYearValue(e.target.valueAsNumber)} />
        <button className="btn btn-primary btn-sm" onClick={(e)=> trigerValue(e)}><FaSearch/>Search</button>
      </div>
		<br/>
		<HighchartsReact
			highcharts={Highcharts}
			options={chatOptions()}
		/>
		<br/>
		<div>
		   <HighchartsReact
			highcharts={Highcharts}
			options={chatOption1()}
		  />
		</div>
    </div>
  )
  
} 

export default Dashboard
