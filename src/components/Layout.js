import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    page:{
        backgroundColor: "#f9f9f9"
    }
})
function Layout({children}) {
    const classes = useStyle();

    return (
        <div className={classes.page}>
            {children}
        </div>
    )
}

export default Layout
