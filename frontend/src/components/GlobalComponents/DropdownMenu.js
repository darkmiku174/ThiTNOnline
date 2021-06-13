import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import {studentLogoutAction} from '../../actions/StudentActions'
import {lecturerLogoutAction} from '../../actions/LecturerActions'

function DropdownMenu({pushToHome,pathname,redirectToProfile}) {
  const dispatch = useDispatch()
  const studentLogin = useSelector(state => state.studentLogin)
  const {studentInfo} = studentLogin ? studentLogin : {studentInfo: null}
  const lecturerLogin = useSelector(state => state.lecturerLogin)
  const {lecturerInfo} = lecturerLogin ? lecturerLogin : {lecturerInfo: null}

    const user = pathname.includes("giangvien") ? lecturerInfo
        : studentInfo && !pathname.includes("giangvien") ? studentInfo : null
  // const user = studentInfo ? studentInfo : lecturerInfo ? lecturerInfo : null

  const [open, setOpen] = useState(false)

  DropdownMenu.handleClickOutside = () => setOpen(false)
  const openDropdown = () => {
    setOpen(!open)
  }
  const userLogout = () => {
    if (studentInfo) {
      dispatch(studentLogoutAction())
      pushToHome("/")
    }
    else if (lecturerInfo) {
      dispatch(lecturerLogoutAction())
      pushToHome("/giangvien/login")
    }
  }


  if (user == null) {
    return null;
  }

  return (
    <div className="drop-down noselect">
      <div className="drop-down-head" onClick={e => openDropdown()}>
        <div className="profile-img">
          <img src={user.AnhDaiDien} />
        </div>
        <div className="text-primary ">{user.HoTen}</div>
      </div>
      {open ?
        <div className="drop-down-body bg-primary shadow">
          <ul>
            <li className="bg-primary text-white"
                onClick={() =>redirectToProfile(studentInfo ? "/profile" : "/giangvien/profile")}>
              <i className="fas fa-user"
                 style={{marginRight: "0.6rem"}}/>Profile
          </li>
            <li className="bg-primary text-white" onClick={e => userLogout()}>
              <i className="fas fa-sign-out-alt"
                 style={{marginRight: "0.6rem"}}/>Logout
          </li>
          </ul>
        </div>
        : ""
      }
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownMenu.handleClickOutside
}

export default onClickOutside(DropdownMenu, clickOutsideConfig)

