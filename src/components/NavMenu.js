// react import
import React from "react";
// material styles
import { makeStyles } from "@material-ui/core/styles";
// material icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// material core
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";


// usestyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiPaper-rounded": {
      borderRadius: "0px",
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "0px 0px 1px 0px rgba(0,0,0,1)",
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  width: {
    width: "200px",
    zIndex: 999,
    marginTop: "14px",
  },
}));


// ----------------------------------------------------------------------------------------

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className="text-capitalize"
          endIcon={<ArrowDropDownIcon />}
        >
          {props.title}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.width}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.menuRoot}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                      {props.data && props.data.map((value) => (
                           <a
                           target="blank"
                           href={value.url}
                         >
                           <MenuItem onClick={handleClose}>{value.name}</MenuItem>
                         </a>
                      ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
