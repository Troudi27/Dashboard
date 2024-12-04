import { ChatBubbleOutlineSharp, DarkModeOutlined, FullscreenExit, LanguageOutlined, ListOutlined, NotificationsNone, SearchOutlined } from "@mui/icons-material"
import "./Navbar.scss"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

export default function Navbar() {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ..."/>
          <SearchOutlined/>
        </div>
        <div className="items">
          <div className="item"><LanguageOutlined className="icon"/>English</div>
          <div className="item" onClick={()=> dispatch({type:"TOGGLE"})}><DarkModeOutlined className="icon"/></div>
          <div className="item"><FullscreenExit className="icon"/></div>
          <div className="item"><NotificationsNone className="icon"/><div className="counter">1</div></div>
          <div className="item"><ChatBubbleOutlineSharp className="icon"/><div className="counter">1</div></div>
          <div className="item"><ListOutlined className="icon"/></div>
          <div className="item"><img src="https://fbi.cults3d.com/uploaders/14388486/illustration-file/e4720490-0a10-4a99-a225-b5b4bea7ff58/Mudkip_2.png" alt="" className="avatar"/></div>
        </div>
      </div>
    </div>
  )
}
