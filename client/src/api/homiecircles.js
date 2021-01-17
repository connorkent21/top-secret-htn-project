import Spaxios from './Spaxios';

const spaxios = new Spaxios();

export async function AddMovieGenres(homieCircleID, genres) {
    const data = {
      homieCircleID: homieCircleID,
      genres: genres,
    };
  
    let res = await spaxios
      .post('/homiecircles/genre', data)
      .catch((err) => err);
    if (res && res.status === 200) {
      return res.data;
    }
  
    return null;
  }