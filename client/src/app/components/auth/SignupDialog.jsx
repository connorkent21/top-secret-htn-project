import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../common/SubmitButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlined from '@material-ui/icons/LockOutlined';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';
import useForm from '../../../hooks/useForm';
import SignupValidation from '../auth/SignupValidation';
import { Signup } from '../../../api/Auth';

const styles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '12px',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  centered: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const defaultValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const SignupDialog = (props) => {
  const { open, onClose } = props;
  const classes = styles();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const signup = async () => {
    console.log('Signing Up');
    console.log('these are the values: ', values);
    setSubmitting(true);
    const res = await Signup(values.username, values.password).catch((err) =>
      console.log(err)
    );
    setSubmitting(false);
  };

  const { values, handleChange, handleSubmit, errors, clearErrors } = useForm(
    signup,
    SignupValidation,
    defaultValues
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <form className={classes.formContainer} noValidate autoComplete="off">
          <TextField
            autoComplete="username"
            name="username"
            value={values.username}
            error={errors.username}
            helperText={errors.username}
            placeholder="Username"
            onChange={handleChange}
            onFocus={clearErrors}
            fullWidth
            label="Username"
            id="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleOutlinedIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="current-password"
            name="password"
            value={values.password}
            error={errors.password}
            helperText={errors.password}
            onChange={handleChange}
            onFocus={clearErrors}
            fullWidth
            placeholder="Password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="secondary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <VisibilityOutlined color="secondary" />
                    ) : (
                      <VisibilityOffOutlined color="secondary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoComplete="current-password"
            name="confirmPassword"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword}
            onChange={handleChange}
            onFocus={clearErrors}
            fullWidth
            placeholder="Confirm Password"
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            id="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="secondary" />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div className={classes.centered}>
          <SubmitButton
            title="Signup"
            variant="contained"
            size="large"
            buttonClassName={classes.submitButton}
            submitting={submitting}
            onClick={handleSubmit}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupDialog;
