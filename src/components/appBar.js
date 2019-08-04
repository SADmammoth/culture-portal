import React from 'react';
import { Link } from 'gatsby';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Logo from '../images/photo-icon.png';
import { connect } from 'react-redux';
import { toggleEnMode } from '../state/app';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  titleLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#e7fcff',
    },
    minWidth: 0,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 120,
      '&:focus': {
        width: 200,
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
      '&:focus': {
        width: 120,
      }
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bigAvatar: {
    margin: 5,
    marginLeft: 0,
    width: 50,
    height: 50,
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    transition: theme.transitions.create('backgroundColor'),
  },
}));

const PrimarySearchAppBar = ({isEnMode, dispatch}) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  let title = isEnMode ? 'Photographers of Belarus' : 'Фотографы Беларуси';
  let search = isEnMode ? 'Search...' : 'Поиск';
  
  const isMenuOpen = Boolean(anchorEl);

  function handleLanguageMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    dispatch(toggleEnMode(!isEnMode));
  }

  const menuId = 'primary-search-languages-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>En</MenuItem>
      <MenuItem onClick={handleMenuClose}>Ru</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Link to="/">
              <Avatar alt="Logo" src={Logo} className={classes.bigAvatar} />
            </Link>
            <Link to="/photographers-list/" className={classes.titleLink}>
              <Typography className={classes.title} variant="h6" noWrap>
              {title}
              </Typography>
            </Link>
            <div className={classes.grow} />
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <IconButton
              edge="end"
              aria-label="languages"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default connect(state => ({
  isEnMode: state.app.isEnMode
}), null)(PrimarySearchAppBar);
