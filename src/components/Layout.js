import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 250;

const useStyle = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: "#f9f9f9",
            width: '100%',
            padding: theme.spacing(3)
        },
        title: {
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        }
    }
});

function Layout({ children }) {
    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: "Create Note",
            icon: <AddCircleOutlined color='secondary' />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>

            {/* side drawer */}
            <Drawer className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Notes
                    </Typography>
                </div>

                {/* List items/menu items inside side drawer */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            key={item.text}
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>


            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
