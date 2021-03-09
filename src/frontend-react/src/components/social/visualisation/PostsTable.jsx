import React, {useState, useEffect} from "react";

//Import DataGrid (table)
import { DataGrid } from '@material-ui/data-grid';

//Import WeightGet service
import ActivitiesGet from '../../../services/post/postGet'

export default function PostTable() {

    //State for table rows to be appended on
    const [tableRows,setTableRow] = useState([]);
  
    //Define table columns for DataGrid
    const tableColumns = [
        { field: "username", headerName: "Username", description: 'Username', sortable: false, flex: 0.3},
        { field: "firstName", headerName: "First Name", description: 'First Name', sortable: false, flex: 0.3},
        { field: "lastName", headerName: "Last Name", description: 'Last Name', sortable: false, flex: 0.3},
        { field: "post", headerName: "Post", description: 'Post', sortable: false, flex: 1},
        ];

    //Load table data before render
    useEffect(() => {
        ActivitiesGet.getPostsUserDetails().then(dataResponse => {
            //Change ActivityID to id (required ID field for DataGrid)
            var DataGridID = dataResponse.map(item => { return { ...item, id: item.postID }; });

            console.log(dataResponse)

            //Update Row fields
            setTableRow(DataGridID);
          })
        }, []);

    return (
        <div style={{ height: '90vh', width: '90%', padding: '45px' }}>
        <DataGrid
            columns={tableColumns}
            rows={tableRows}
            pageSize={6}
            rowsPerPageOptions={[6, 12, 30, 100, 1000]}
        />
        </div>
    );
}