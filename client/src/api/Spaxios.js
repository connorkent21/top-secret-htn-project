import axios from 'axios';

class Spaxios {
  // Create new axios instance and add the incterceptor
  constructor() {
    this.axiosClient = axios.create();
    this.axiosClient.defaults.headers.common['Content-Type'] =
      'application/json';

    this.axiosClient.interceptors.request.use(
      function (config) {
        // Append the local storage token to the headers
        config.headers.authorization =
          localStorage.getItem('htn-token') ||
          sessionStorage.getItem('htn-token');
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get = async (url, config = { ...this.axiosClient.defaults }) => {
    let res = await this.axiosClient
      .get(this.formatURL(url), config)
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  post = async (url, body, config = { ...this.axiosClient.defaults }) => {
    let res = await this.axiosClient
      .post(this.formatURL(url), body, config)
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  formatURL(url) {
    if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
      return url;
    }

    return url;
  }
}

export default Spaxios;
