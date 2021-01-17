export default function SignupValidation(values) {
  let errors = {};

  Object.keys(values).forEach((key) => {
    switch (key) {
      case 'password' && 'confirmPassword':
        if (!(values.password && values.confirmPassword)) {
          errors.password = errors.confirmPassword =
            'Please enter and confirm your password.';
        } else if (values.password !== values.confirmPassword) {
          errors.password = errors.confirmPasswword =
            'Passwords must be the same.';
        } else if (values.password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
        }
        break;
      default:
        if (!values[key].length) {
          errors[key] = 'Please enter the required field.';
        }
    }
  });
  return errors;
}
