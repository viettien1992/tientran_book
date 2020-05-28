import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

export default function Main(props) {
  let history = useHistory();
  const useStyles = makeStyles({
    menu: {
      backgroundColor: "cornflowerblue",
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
      <div className={classes.menu}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Home
        </Button>
        <Button
          varia-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            history.push("/book");
          }}
        >
          Book
        </Button>
      </div>
      {props.children}
    </div>
  );
}
