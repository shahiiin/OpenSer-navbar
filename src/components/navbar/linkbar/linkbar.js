import { useState } from 'react';
import './linkbar.css'
import { Button } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { AccountBalanceWallet } from '@material-ui/icons';

const LinkBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    root: {
      color: 'rgba(4, 17, 29, 0.75)',
      display: 'flex',
      height: '100 %',
      padding: ' 0px 20px',
      width: '100 %'
    },
    icons: {
      color: 'rgba(4, 17, 29, 0.75)',
      fontSize: '26px',
      padding: '0px 10px'
    },
  }
  return (
    <div className="link-bar">
      <Button style={style.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Explore
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button style={style.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        States
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button style={style.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Resources
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button style={style.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Create
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <AccountCircle style={style.icons} />
      <AccountBalanceWallet style={style.icons} />
    </div>
  );
}
export default LinkBar;