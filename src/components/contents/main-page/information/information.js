import './information.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  explor: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '10px',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 20px',
    backgroundColor: 'rgb(32, 129, 226)',
    border: '1px solid rgb(32, 129, 226)',
    color: 'rgb(255, 255, 255)',
    marginRight:37,
    width: 167,
},
  create: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '10px',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 20px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(32, 129, 226)',
    color: 'rgb(32, 129, 226)',
    width: 167,
  }
}));



const Information = () => {
  const classes = useStyles();
  return (
    <div className="information">
      <h1 style={{margin:0,fontSize:45}}>Discover, collect, and <br></br>sell extraordinary NFTs</h1>
      <h5 style={{fontSize:24,color:'#353840'}}>OpenSea is the world's first and <br></br>largest NFT marketplace</h5>
      <Button className={classes.explor}
        variant="contained" color="primary">Explore</Button>
      <Button className={classes.create}
        variant="contained" color="primary">Create</Button>
    </div>
  )
}
export default Information;