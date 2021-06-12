// react import
import React from "react";
// material styles
import { makeStyles, useTheme } from "@material-ui/core/styles";
// material icons
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// material core imports
import {
  Container,
  Slide,
  useMediaQuery,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  Collapse,
} from "@material-ui/core";
// react link
import { NavLink } from "react-router-dom";



// useStyles
const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "100%",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      marginLeft: "auto",
    },
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btnSize:{
    [theme.breakpoints.down('sm')]:{
      height:"8"
    }
  }
}));


// transition slide
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// --------------------------------------------------------------------------------------------------

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setstate] = React.useState({
    resourceExpand: false,
    aboutExpand: false,
  });
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExpand = () => {
    setstate({ ...state, resourceExpand: !state.resourceExpand });
  };
  const handleAboutExpand = () => {
    setstate({ ...state, aboutExpand: !state.aboutExpand });
  };

  return (
    <div className={classes.root}>
      <IconButton variant="outlined" color="primary" className={classes.btnSize} onClick={handleClickOpen}>
        <MenuIcon  />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container fixed>
          <AppBar
            color="inherit"
            className="header header-light navbar-light bg-white shadow-none border-bottom"
            position="static"
          >
            <Toolbar>
              <IconButton
                className="ml-auto"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Container>
        <List>
          <ListItem button alignItems="center">
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <Divider />

          {/* resource list expand */}
          <ListItem button onClick={handleExpand}>
            <ListItemText primary="Resources" />
            {state.resourceExpand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.resourceExpand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {props.resourceData && props.resourceData.map((value) => (
                    <a
                    rel="noreferrer"
                    target="_blank"
                    href={value.url}
                  >
                    <ListItem button alignItems="center" className={classes.nested}>
                      {value.name}
                    </ListItem>
                  </a>
                ))}
            </List>
          </Collapse>

          {/* about list expand */}
          <ListItem button onClick={handleAboutExpand}>
            <ListItemText primary="About" />
            {state.aboutExpand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state.aboutExpand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {props.aboutData && props.aboutData.map((value) => (
                    <a
                    rel="noreferrer"
                    target="_blank"
                    href={value.url}
                  >
                    <ListItem button alignItems="center" className={classes.nested}>
                      {value.name}
                    </ListItem>
                  </a>
                ))}
            </List>
          </Collapse>
        </List>
      </Dialog>
    </div>
  );
}
