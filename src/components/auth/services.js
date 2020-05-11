import { config, axios } from '@/config';
import store from '@/store';

const serviceAuth = {

  async login(payload) {
    return axios.post(`${config.auth.url}login`, payload);
  },

  async logout(payload) {
    return axios.post(`${config.auth.url}logout`, payload);
  },

  async logStoreDispache(response) {
    const { user, credentials } = response;
    store.dispatch("userSignIn", {
      user,
      credentials,
      logged: true
    });
  }

};

export default serviceAuth;
