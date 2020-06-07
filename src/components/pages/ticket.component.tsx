import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography, TableCell, TableRow, TableHead, Table, TableContainer, Paper, TableBody } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './ticket.component.css';
import { Istate } from '../../reducers';
import { addTicket } from '../../actions/ticket.actions';
import { connect } from 'react-redux';
import { Ticket } from '../../models/Ticket';
import { getTicketById } from '../../remotes/ticket.remote';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        table: {
            minWidth: 650,
        },
        button: {
            margin: theme.spacing(1),
        }
    }),
);

export interface TicketComponentProps {
    addTicket: (ticket: Ticket) => void;
    ticket: Ticket | undefined;
}

export const TicketComponent: React.FC<TicketComponentProps> = (props) => {

    const classes = useStyles();
    const {ticket} = props;

    const addTicket = async () => {
        const ticket = await getTicketById(1);
        console.log(ticket);
    }


    return (
        <div id="flex-container">
            <header >
                <Typography variant='h3' component='h2' gutterBottom> New Reimbursement Ticket</Typography>
            </header>
            <section>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField required id="standard" label="Reimbursement Amount" />
                        <TextField required id="standard" label="Submission Date" />
                    </div>
                    <div>
                        <TextField required id="standard" label="Resolved Date" />
                        <TextField required id="standard" label="Description" />
                    </div>
                    <div>
                        <TextField required id="standard" label="Receipt" />
                        <TextField required id="standard" label="Author" />
                    </div>
                    <div>
                        <TextField required id="standard" label="Resolver" />
                        <TextField required id="standard" label="Status" />
                    </div>

                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() => addTicket()}
                    >
                        Submit
                </Button>
                </form>
            </section>
        </div>
    )
}


export const mapStateToProps = (state: Istate) => {
    return {
        ticket: state.ticketState.ticket
    }
}

export const mapDipatchToProps = {
    addTicket
}

export default connect(mapStateToProps, mapDipatchToProps)(TicketComponent);