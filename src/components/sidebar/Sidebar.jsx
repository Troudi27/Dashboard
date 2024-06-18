import {  AccountBox, Assessment, CreditCard, ExitToAppOutlined, LocalShipping, NotificationsNone, PersonOutline, PsychologyOutlined, SettingsOutlined, SettingsSystemDaydreamOutlined, Store } from "@mui/icons-material";
import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">TroudiAdmin</span>
          </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li><DashboardIcon  className="icon"/><span>Dashboard</span></li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                  <li><PersonOutline className="icon"/> <span>Users</span></li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li> <Store className="icon"/> <span>Products</span></li>
                </Link>
                <li><CreditCard className="icon"/> <span>Orders</span></li>
                <li><LocalShipping className="icon"/><span>Delivery</span></li>
                <p className="title">USEFUL</p>
                <li><Assessment className="icon"/> <span>Stats</span></li>
                <li><NotificationsNone className="icon"/> <span>Notifications</span></li>
                <p className="title">SERVICES</p>
                <li><SettingsSystemDaydreamOutlined className="icon"/><span>System Health</span></li>
                <li><PsychologyOutlined className="icon"/> <span>Logs</span></li>
                <li><SettingsOutlined className="icon"/> <span>Settings</span></li>
                <p className="title">USER</p>
                <li><AccountBox className="icon"/> <span>Profile</span></li>
                <li><ExitToAppOutlined className="icon"/> <span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
