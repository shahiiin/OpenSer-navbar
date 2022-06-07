import Information from "./information/information";
import Avatar from "./avatar/avatar";
import Grid from '@material-ui/core/Grid';
import './main.css'



const Main = () => {
 

  return (
    <div className='main'>
      <Grid item xs={6}>
        <Information />
      </Grid>
      <Grid item xs={6}>
        <Avatar />
      </Grid>
    </div>
  )
}
export default Main;