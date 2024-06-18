import "./DataTable.scss"

import { DataGrid} from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatableSources";
import { Link } from "react-router-dom";




export default function DataTable() {

  const actionColumn =[{ field: 'action', headerName: 'Action', width: 200 , 
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link  to="/users/test" style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>
            </Link>
              <div className="deleteButton">Delete</div>
        </div>
    );
  },},];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" className="link">
        Add New
        </Link>
      </div>
        <DataGrid rows={userRows} columns={userColumns.concat(actionColumn)} initialState={{pagination: { paginationModel: { page: 0, pageSize: 9 }, }, }}pageSizeOptions={[9, 10]}checkboxSelection/>
    </div>
  )
}
