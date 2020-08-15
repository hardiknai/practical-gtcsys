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

export default function CheckboxesGroup({ design, resale, handleChange }) {
  const classes = useStyles();
  const error = [design, resale].filter((v) => v).length < 1;

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
                checked={design}
                onChange={handleChange}
                name="design"
              />
            }
            label="Custom Interior Design"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={resale}
                onChange={handleChange}
                name="resale"
              />
            }
            label="Resale & Listing Brokerage"
          />
        </FormGroup>
        {error && <FormHelperText>Select atleast one</FormHelperText>}
      </FormControl>
    </div>
  );
}
