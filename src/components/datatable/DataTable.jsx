import "./DataTable.scss"

import { DataGrid} from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatableSources";
import { render } from "@testing-library/react";



export default function DataTable() {

  const actionColumn =[{ field: 'action', headerName: 'Action', width: 200 , 
    renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton">View</div>
              <div className="deleteButton">Delete</div>
        </div>
    );
  },},];
  return (
    <div className="dataTable">
        <DataGrid rows={userRows} columns={userColumns.concat(actionColumn)} initialState={{pagination: { paginationModel: { page: 0, pageSize: 9 }, }, }}pageSizeOptions={[9, 10]}checkboxSelection/>
    </div>
  )
}
