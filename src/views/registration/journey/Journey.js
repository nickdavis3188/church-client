import React from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    // CCollapse,
    // CDropdownItem,
    // CDropdownMenu,
    // CDropdownToggle,
    // CFade,
    CForm,
    CFormGroup,
    CFormText,
    // CValidFeedback,
    // CInvalidFeedback,
    CTextarea,
    CInput,
    // CInputFile,
    // CInputCheckbox,
    // CInputRadio,
    // CInputGroup,
    // CInputGroupAppend,
    // CInputGroupPrepend,
    // CDropdown,
    // CInputGroupText,
    CLabel,
    // CSelect,
    // CRow,
    // CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Journey = ()=>{
    return(
        <>
        <h3>Journey </h3>
        <CCard>
        <CCardHeader>
        Journey
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-JourneyName">Journey Name</CLabel>
              </CCol>
              <CCol  md="5">
                <CInput id="hf-JourneyName" name="hf-JourneyName" placeholder="Enter JourneyName..." />
                <CFormText className="help-block">Please enter your Journey Name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-JourneyPriority">Journey Priority</CLabel>
              </CCol>
              <CCol  md="5">
              <CTextarea 
                      name="JourneyPriority" 
                      id="JourneyPriority" 
                      rows="3"
                      placeholder="JourneyPriority..." 
                    />
                <CFormText className="help-block">Please enter your Journey Priority</CFormText>
              </CCol>
            </CFormGroup>
            {/* <CFormGroup>
                <CCol md="12">
                    <h5>Task For The Journey</h5>
                </CCol>
            </CFormGroup> */}
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> 
          <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
      </>
    )
}
export default Journey