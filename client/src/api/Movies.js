import Spaxios from './Spaxios';

const spaxios = new Spaxios();

export async function GetMoviesByGenre(user, genres) {
  const data = {
    userId: user,
    genres,
  };

  let res = await spaxios
    .post('/homiescircle/genres', data)
    .catch((err) => err);
  if (res && res.status === 200) {
    return res.data;
  }

  return null;
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
