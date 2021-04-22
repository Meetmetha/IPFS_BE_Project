//import AvatarGroup from '../@core/components/avatar-group'
import React from 'react';
import { connect } from 'react-redux'
import react from '../frontend/assetsf/images/icons/react.svg'
import vuejs from '../frontend/assetsf/images/icons/vuejs.svg'
import angular from '../frontend/assetsf/images/icons/angular.svg'
import bootstrap from '../frontend/assetsf/images/icons/bootstrap.svg'
import avatar1 from '../frontend/assetsf/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '../frontend/assetsf/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '../frontend/assetsf/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Lilian',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Alberto',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Bruce',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Diana',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Rey',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'James',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Lee',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Mario',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Oswald',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Christie',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Barnes',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Arthur',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableBasic = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Project</th>
          <th>Client</th>
          <th>Users</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='mr-75' src={angular} alt='angular' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Angular Project</span>
          </td>
          <td>Peter Charles</td>
          <td>
            
          </td>
          <td>
            <Badge pill color='light-primary' className='mr-1'>
              Active
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='mr-75' src={react} alt='react' height='20' width='20' />
            <span className='align-middle font-weight-bold'>React Project</span>
          </td>
          <td>Ronald Frest</td>
          <td>
           
          </td>
          <td>
            <Badge pill color='light-success' className='mr-1'>
              Completed
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='mr-75' src={vuejs} alt='vuejs' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Vuejs Project</span>
          </td>
          <td>Jack Obes</td>
          <td>
            
          </td>
          <td>
            <Badge pill color='light-info' className='mr-1'>
              Scheduled
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        <tr>
          <td>
            <img className='mr-75' src={bootstrap} alt='bootstrap' height='20' width='20' />
            <span className='align-middle font-weight-bold'>Bootstrap Project</span>
          </td>
          <td>Jerry Milton</td>
          <td>
            
          </td>
          <td>
            <Badge pill color='light-warning' className='mr-1'>
              Pending
            </Badge>
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableBasic
