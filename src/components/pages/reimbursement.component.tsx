import React from 'react';
import { Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Theme, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import './reimbursement.component.css'
import { ReimbursementRowComponent } from './reimbursement-row.component';
import { Istate } from '../../reducers';
import { connect } from 'react-redux';
import { Ticket } from '../../models/Ticket';
import { getAllTickets } from '../../remotes/ticket.remote';



const useStyles = makeStyles((theme: Theme) => ({
    table: {
        minWidth: 650
        },
    button: {
        margin: theme.spacing(1),
    }
}));

export interface ReimbursementComponentProps {
    ticket: Ticket[];
}



export const ReimbursementComponent: React.FC<ReimbursementComponentProps> = ({ticket}) => {

    const classes = useStyles();
    const loadTickets = async () => {
        const tickets  = await getAllTickets();
        console.log(tickets);
        ticket = [...tickets];
        
    }

    return (
        <div id="flex-container">
            <header>
                <Typography variant='h2' component='h2' gutterBottom> Reimbursements</Typography>
            </header>
            <section>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Submitted</TableCell>
                                <TableCell align="right">Resolved</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Receipt</TableCell>
                                <TableCell align="right">Author</TableCell>
                                <TableCell align="right">Resolver</TableCell>
                                <TableCell align="right">Status ID</TableCell>
                                <TableCell align="right">Type ID</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody id="table-body">
                        {ticket.map(r => { return (
                        <ReimbursementRowComponent reimbId={r.reimbId} reimbAmount={r.reimbAmount} reimbSubmitted={r.reimbSubmitted} reimbResolved={r.reimbResolved}
                            reimbDescription={r.reimbDescription} reimbReceipt={r.reimbReceipt} reimbAuthor={r.reimbAuthor} reimbResolver={r.reimbResolver}
                            reimbStatusId={r.reimbStatusId} reimbTypeId={r.reimbTypeId} reimbStatus={r.reimbStatus}/>
                )})}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => loadTickets()}
                    >
                        Submit
                </Button>
            </section>
        </div>
    );

}

export const mapStateToProps = (state: Istate) => {
    return {
        ticket: state.ticketState.collectedTickets
    }
}

export const mapDipatchToProps = {
    
}

export default connect(mapStateToProps, mapDipatchToProps)(ReimbursementComponent);