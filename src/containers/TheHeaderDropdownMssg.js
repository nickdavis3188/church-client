import React from 'react'
import {
  CBadge,
  CDropdown,

  CDropdownToggle,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownMssg = () => {
  let itemsCount;
  const messageRendering = itemsCount ? <CBadge shape="pill" color="info">{itemsCount}</CBadge>:'' 
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-envelope-open" />
        {messageRendering}
      </CDropdownToggle>
   
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg