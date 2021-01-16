import Spaxios from './Spaxios';

const spaxios = new Spaxios();

export async function LoginUser(loginId, password, keepLoggedIn) {
  const data = {
    loginId: loginId,
    password,
  };

  // Remove the current token to allow another to be generated
  localStorage.removeItem('htn-token');
  sessionStorage.removeItem('htn-token');
  let res = await spaxios.post('/auth/login', data).catch((err) => err);
  if (res && res.status === 200) {
    keepLoggedIn
      ? localStorage.setItem('htn-token', res.data.token)
      : sessionStorage.setItem('htn-token', res.data.token);
    return res.status;
  }
  return 401;
}

export async function CheckAuth() {
  let res = await spaxios.get('/auth/info').catch((err) => err);
  return res ? res.status : 401;
}

export async function GetUser() {
  let res = await spaxios.get('/auth/user').catch((err) => err);
  console.log('res from server: ', res);
  if (res && res.status === 200) {
    const user = res.data;
    return user;
  } else {
    return null;
  }
}
