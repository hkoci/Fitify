import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Dummy Activity Data (prepared for backend implementation)
function createData(id, activityName, description, amount, date) {
  return { id, activityName, description, amount, date };
}

const rows = [
  createData(0, 'Weight recorded', '', '74Kg', '16 Mar, 2019'),
  createData(1, 'Water intake recorded', '', '0.5L', '16 Mar, 2019'),
  createData(2, 'Water intake recorded', '', '1.2L', '16 Mar, 2019'),
  createData(3, 'Sleep recorded', '', '5 hours total', '16 Mar, 2019'),
  createData(4, 'Water intake recorded', '', '1.2L', '16 Mar, 2019'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Activities() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Activity log</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Activity Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.activityName}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more activities
        </Link>
      </div>
    </React.Fragment>
  );
}