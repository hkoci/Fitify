import React, {useState, useEffect} from "react";

//Import DataGrid (table) and Grid toolbar (export features)
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

//Import SleepGet service
import SleepGet from '../../../services/activities/sleepGet'

export default function SleepTable() {

    //State for table rows to be appended on
    const [tableRows,setTableRow] = useState([]);
  
    //Define table columns for DataGrid
    const tableColumns = [
        { field: "sleepDate", headerName: "Sleep Date", description: 'The date of the sleep measurement.', type: 'date', flex: 0.9},
        { field: "sleepTime", headerName: "Sleep Time", description: 'The time of going to sleep', flex: 0.9},
        { field: "awakeTime", headerName: "Awake Time", description: 'The time of being awake',  flex: 0.9},
        { field: "sleepingHrs", headerName: "Sleeping Hours", description: 'Hours spent sleeping (2dp)', type: 'time', flex: 0.9},
        { field: "moodRating", headerName: "Mood Rating", description: 'Mood rating is out of 5, with 5 being the most motivated.', type: 'number', flex: 0.5},
        ];

    //Load table data before render
    useEffect(() => {
        SleepGet.getUserData().then(dataResponse => {
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