import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
export default function Main(props) {
  let history = useHistory();
  const useStyles = makeStyles({
    menu: {
      color: "#fff",
      backgroundColor: "#3f51b5",
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menu}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push("/book");
              }}
            >
              Book
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
