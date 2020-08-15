import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonalDetail from "../PersonalDetail";
import Invest from "../Invest";
import Services from "../Services";
import { useStyles } from "./style";

function getSteps() {
  return [
    "Enter your personal detail",
    "Where do you invest?",
    "Are you interested in any of the following services",
  ];
}
const initialState = {
  name: "",
  email: "",
  password: "",
  ahmedabad: true,
  rajkot: false,
  surat: false,
  design: true,
  resale: false,
};
export default function Wizard({ dataArray }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [state, setState] = React.useState(initialState);

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setState({ ...state, [event.target.name]: value });
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <PersonalDetail
            name={state.name}
            email={state.email}
            password={state.password}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <Invest
            ahmedabad={state.ahmedabad}
            rajkot={state.rajkot}
            surat={state.surat}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Services
            design={state.design}
            resale={state.resale}
            handleChange={handleChange}
          />
        );
      default:
        return "Unknown step";
    }
  }
  const onSubmitEvent = () => {
    alert(JSON.stringify(state));
  };

  const handleNext = () => {
    if (activeStep == 2) {
      onSubmitEvent();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
