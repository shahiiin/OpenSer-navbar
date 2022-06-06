import Avatar from './../../../assets/image/avatar.svg'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './logo.css'







const styles = {
  root: {
    marginRight: '18px',
    marginTop: '26px'
  }
}

const Logo = () => {




  return (
    <div className='logo'>
      <img src={Avatar} alt='logo' />
      <h2 style={styles.root}>Open Sea</h2>
      <div className='search'>
        <input type="text"
          placeholder="Search items, collections, and accounts" />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{
            position: 'absolute', marginTop: '-75px',
            marginLeft: '16px',fontSize: '18px'
          }} />
        </IconButton>
      </div>
    </div>
  )
}
export default Logo