import Spaxios from './Spaxios';

const spaxios = new Spaxios();

export async function GetMoviesByGenre(user, genres) {
  const data = {
    userId: user,
    genres: genres,
  };

  const res = await spaxios.post('/movies/movieList', data).catch(err => err);
  if (res && res.status === 200) {
    return res.data;
  }

  return null;
}
