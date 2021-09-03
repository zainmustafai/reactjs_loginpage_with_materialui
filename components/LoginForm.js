import React from "react";
import { Avatar, Grid, Button ,Paper, TextField, Typography, Link } from "@material-ui/core";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const paperStyle = {
  padding: 15,
  height: "60vh",
  width: 400,
  margin: "20px auto",
};
const avatarStyle = {
  backgroundColor: "green",
};

const buttonStyle={
    margin: "10px 0px",
    color: "white",
    padding: 10

}
function LoginForm() {
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {" "}
              <AssignmentIndOutlinedIcon />{" "}
            </Avatar>
            <h1>Sign In</h1>
          </Grid>
          <Grid  style={ buttonStyle } >
            <TextField
              id="standard-basic"
              label="Enter Username"
              fullWidth
              required
              placeholder="Username"
            />
            <br />
            <TextField
              id="standard-basic"
              type="password"
              label="Enter Password"
              fullWidth
              required
              placeholder="Password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedI" />}
              label="Show Password."
            />

            <Button type="submit" variant="contained" color="primary" fullWidth  style= {buttonStyle} >
              SIGN IN
            </Button>

            <Typography>
                <Link>Forgot Password?</Link>
            </Typography>

          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default LoginForm;
