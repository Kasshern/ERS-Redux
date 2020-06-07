import React from 'react';
import { Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


interface ReimbursementRowComponentProps {
    reimbId: number;
    reimbAmount: number;
    reimbSubmitted: string;
    reimbResolved: string;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor: number;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;
    reimbStatus: string;
}

export const ReimbursementRowComponent: React.FC<ReimbursementRowComponentProps> = (props) => {

    return (
        <div>
                <TableCell align="right">{props.reimbId}</TableCell>
                <TableCell align="right">{props.reimbAmount}</TableCell>
                <TableCell align="right">{props.reimbSubmitted}</TableCell>
                <TableCell align="right">{props.reimbResolved}</TableCell>
                <TableCell align="right">{props.reimbDescription}</TableCell>
                <TableCell align="right">{props.reimbReceipt}</TableCell>
                <TableCell align="right">{props.reimbAuthor}</TableCell>
                <TableCell align="right">{props.reimbResolver}</TableCell>
                <TableCell align="right">{props.reimbStatusId}</TableCell>
                <TableCell align="right">{props.reimbTypeId}</TableCell>
                <TableCell align="right">{props.reimbStatus}</TableCell>
        </div>
    )
}