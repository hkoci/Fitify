import React, {useState, useEffect} from "react";

//Import DataGrid (table) and Grid toolbar (export features)
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

//Import WeightGet service
import WeightGet from '../../../services/activities/weightGet'

export default function RowsGrid() {

    //State for table rows to be appended on
    const [tableRows,setTableRow] = useState([]);

    //Define table columns for DataGrid
    const tableColumns = [
        { field: "activityStart", headerName: "Date", type: 'date', width: 250},
        { field: "description", headerName: "Description", sortable: false, width: 400},
        { field: "moodRating", headerName: "Mood Rating", description: 'This rating is out of 5, with 5 being the most motivated', type: 'number', width: 200},
        { field: "weight", headerName: "Weight (kg)", description: 'Weight is measured in kilograms.', type: 'number', width: 200},
        ];

    //Load table data before render
    useEffect(() => {
        WeightGet.getUserData().then(dataResponse => {
            //Change ActivityID to id (required ID field for DataGrid)
            var DataGridID = dataResponse.map(item => { return { ...item, id: item.activityID }; });

            console.log(DataGridID)

            //Update Row fields
            setTableRow(DataGridID);
          })
        }, []);

    return (
        <div style={{ height: 440, width: '98%' }}>
        <DataGrid
            columns={tableColumns}
            rows={tableRows}
            components={{
                Toolbar: GridToolbar,
              }}
            pageSize={7}
            rowsPerPageOptions={[7, 14, 30, 365]}
        />
        </div>
    );
}