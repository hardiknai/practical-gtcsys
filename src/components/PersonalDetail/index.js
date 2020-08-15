import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function PersonalDetail({
  name,
  email,
  password,
  handleChange,
}) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Name"
        value={name}
        name="name"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        value={email}
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        value={password}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={handleChange}
      />
    </form>
  );
}
