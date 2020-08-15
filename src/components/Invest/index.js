import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({
  ahmedabad,
  rajkot,
  surat,
  handleChange,
}) {
  const classes = useStyles();

  const error = [ahmedabad, rajkot, surat].filter((v) => v).length < 1;

  return (
    <div className={classes.root}>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        error={error}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={ahmedabad}
                onChange={handleChange}
                name="ahmedabad"
              />
            }
            label="Ahmedabad"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rajkot}
                onChange={handleChange}
                name="rajkot"
              />
            }
            label="Rajkot"
          />
          <FormControlLabel
            control={
              <Checkbox checked={surat} onChange={handleChange} name="surat" />
            }
            label="Surat"
          />
        </FormGroup>
        {error && <FormHelperText>Select atleast one</FormHelperText>}
      </FormControl>
    </div>
  );
}
