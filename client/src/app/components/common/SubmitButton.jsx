import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const ButtonStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-12px',
    marginTop: '-12px',
  },
  withMargin: {
    margin: theme.spacing(1),
  },
}));

export default function SubmitButton(props) {
  const classes = ButtonStyles();
  const {
    buttonClassname,
    submitting,
    onSubmit,
    title,
    color,
    variant,
    type,
    ...rest
  } = props;

  return (
    <div className={classes.wrapper}>
      <Button
        type={type || 'submit'}
        variant={variant || 'contained'}
        color={color || 'primary'}
        className={buttonClassname}
        disabled={submitting}
        onClick={onSubmit}
        {...rest}
      >
        {title}
      </Button>
      {submitting && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
}
