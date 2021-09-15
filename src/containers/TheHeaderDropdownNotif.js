import React from 'react'
import {
  CBadge,
  CDropdown,

  CDropdownToggle,
 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownNotif = () => {
  let itemsCount;
  const noticeRendring = itemsCount?<CBadge shape="pill" color="danger">{itemsCount}</CBadge>:''
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
        {noticeRendring}
      </CDropdownToggle>
    
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif