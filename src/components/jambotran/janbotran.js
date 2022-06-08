import './janbotran.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  font: {
    fontWeight: 600,
    fontSize: 24,
    color: 'rgb(53, 56, 64)'
  },
  box: {
    display: 'flex',
  },
  button: {
    display: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 600,
    padding: '8px 20px',
    backgroundColor: ' rgb(32, 129, 226)',
    border: '1px solid rgb(32, 129, 226)',
    color: 'rgb(255, 255, 255)',
    marginLeft:'34rem'
  }
}))

const Janbotran = () => {
  const classes = useStyles()
  return (

    <>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Paper ></Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className='janbotran'>
            <div className={classes.box}>
              <Typography variant='h4' className={classes.font}>
                Solana is in beta on OpenSea
              </Typography>
              <Button className={classes.button}>Explore</Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default Janbotran;