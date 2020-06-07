import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router';

interface NavComponentProps {
    history: History;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const NavComponent: React.FC<RouteComponentProps> = (props) => {

    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => setMenuAnchor(e.currentTarget)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    ERS
    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            <Menu
                id="simple-menu"
                anchorEl={menuAnchor}
                keepMounted
                open={Boolean(menuAnchor)}
                onClose={() => setMenuAnchor(null)}
            >
                <MenuItem onClick={() => props.history.push('/')}>Ticket</MenuItem>
                <MenuItem onClick={() => props.history.push('/reimbursement')}>Reimbursement</MenuItem>
                <MenuItem onClick={() => props.history.push('/display')}>Display</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default withRouter(NavComponent);