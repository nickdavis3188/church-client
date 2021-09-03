import React,{useState }from "react"
import {
    // CButton,
    CCardFooter,
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import {FaAllergies,FaHistory,FaDatabase,FaSearch} from "react-icons/fa"

// import axios from 'axios';
// import baseUrl from '../../config/config'

// import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Attendance = (props)=>{
    const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    return(
        <>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="input-group-text" id="basic-addon2"><FaSearch/></button>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">            
                    <CCard>
                        <CCardHeader>
                            Controlled tabs
                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
                            <CNav variant="tabs">
                                <CNavItem>
                                <CNavLink>
                                    <FaDatabase/>
                                    { active === 0 && ' Member Details'}
                                </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink>
                                    <FaHistory/>
                                    { active === 1 && 'Journey History'}
                                </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink>
                                    <FaAllergies/>
                                    { active === 2 && 'Journey Attendance'}
                                </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                {`1. ${lorem}`}
                                </CTabPane>
                                <CTabPane>
                                {`2. ${lorem}`}
                                </CTabPane>
                                <CTabPane>
                                {`3. ${lorem}`}
                                </CTabPane>
                            </CTabContent>
                            </CTabs>
                        </CCardBody>                    
                    </CCard>         
                </div>
            </div>
        </>
    )
}

const UserDetails = (props)=>{
    return(
        <h3>Hello</h3>
    )
}

export default  Attendance