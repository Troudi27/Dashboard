import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material"
import "./Featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Totale Revenue</h1>
        <MoreVert fontSize="smalle"/>

      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%"/>
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="desc">Total Sales Made Today Total Sales Made Today Total Sales Made Today</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="smalle"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="smalle"/>
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="smalle" />
              <div className="resultAmount">$12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
