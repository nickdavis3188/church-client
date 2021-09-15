import React from 'react'
import {
  CBadge,
  CDropdown,

  CDropdownToggle,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownTasks = () => {
  let itemsCount;
  const taskRendering = itemsCount?<CBadge shape="pill" color="warning">{itemsCount}</CBadge>:''
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-list" />
        {taskRendering}
      </CDropdownToggle>
     
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks