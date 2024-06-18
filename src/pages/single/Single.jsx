import "./Single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import MyTable from "../../components/Table/Table"

export default function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="edit">Edit</div>
            <h1 className="title">Informations</h1>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="itemImg" />
              <div className="details">
                <h3 className="itemTitle">Houssem Troudi</h3>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">houssemtroudi@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">3432483587</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Adress:</div>
                  <div className="itemValue">uyuy 3 hghg 45h  hhkjhkhhuih</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Tunisia</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2.5 / 1} title="User Spending ( Last 6 Month )"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <MyTable/>
        </div>
      </div>
    </div>
  )
}
 