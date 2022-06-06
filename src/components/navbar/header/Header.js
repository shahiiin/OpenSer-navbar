import './header.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinkBar from '../linkbar/linkbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from '../logobar/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },


}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <Logo />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <LinkBar />
           
            </Paper>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}