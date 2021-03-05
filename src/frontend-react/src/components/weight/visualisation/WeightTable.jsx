import React, {useState, useEffect} from "react";

//Import DataGrid (table) and Grid toolbar (export features)
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

//Import Box for spacing
import Box from '@material-ui/core/Box';

//Import WeightGet service
import WeightGet from '../../../services/activities/weightGet'

export default function RowsGrid() {

    //State for table rows to be appended on
    const [tableRows,setTableRow] = useState([]);
  
    //Define table columns for DataGrid
    const tableColumns = [
        { field: "activityStart", headerName: "Date/Time", description: 'The date/time of the weight measurement.', type: 'dateTime', flex: 0.9},
        { field: "moodRating", headerName: "Mood Rating", description: 'Mood rating is out of 5, with 5 being the most motivated.', type: 'number', flex: 0.5},
        { field: "weight", headerName: "Weight (kg)", description: 'Weight is measured in kilograms.', type: 'number', flex: 0.5},
        { field: "description", headerName: "Description", description: 'Optional description entered by the user.', sortable: false, flex: 1},
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