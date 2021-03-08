import React, {useState, useEffect} from "react";

//Import DataGrid (table) and Grid toolbar (export features)
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

//Import WaterIntakeGet service
import WaterIntakeGet from '../../services/activities/waterIntakeGet'

export default function RowsGrid() {

    //State for table rows to be appended on
    const [tableRows,setTableRow] = useState([]);
  
    //Define table columns for DataGrid
    const tableColumns = [
        { field: "activityStart", headerName: "Date/Time", description: 'The date/time of the weight measurement.', type: 'dateTime', flex: 0.9},
        { field: "moodRating", headerName: "Mood Rating", description: 'Mood rating is out of 5, with 5 being the most motivated.', type: 'number', flex: 0.5},
        { field: "waterIntake", headerName: "Amount (L)", description: 'Amount is measured in litres.', type: 'number', flex: 0.5},
        { field: "description", headerName: "Description", description: 'Optional description entered by the user.', sortable: false, flex: 1},
        ];

    //Load table data before render
    useEffect(() => {
        WaterIntakeGet.getUserData().then(dataResponse => {
            //Change ActivityID to id (required ID field for DataGrid)
            var DataGridID = dataResponse.map(item => { return { ...item, id: item.activityID }; });

            console.log(DataGridID)

            //Update Row fields
            setTableRow(DataGridID);
          })
        }, []);

    return (
        <div style={{ height: '50vh', width: '98%' }}>
        <DataGrid
            columns={tableColumns}
            rows={tableRows}
            components={{
                Toolbar: GridToolbar,
              }}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50, 150, 365]}
        />
        </div>
    );
}