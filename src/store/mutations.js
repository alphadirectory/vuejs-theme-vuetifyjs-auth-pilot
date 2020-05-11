import { myStorage } from './storage';

const mutations = {

  'SET_LOADER'(state, payload) {

    const { color, visible } = payload;

    state.loarder.color = color;
    state.loarder.visible = visible;

  },

  'SET_SNACKBAR'(state, payload) {

    const { color, visible, content } = payload;

    state.snackbar.color = color;
    state.snackbar.visible = visible;
    state.snackbar.content = content;

  },

  'USER_SIGN_IN'(state, payload) {

    state.auth = payload;
    myStorage.persist('auth', state.auth);

  },

  'USER_SIGN_OUT'(state) {

    myStorage.remove('auth');

    state.auth = {
      user: {
        id: '',
        code: '',
        name: '',
      },
      credentials: {
        token: '',
        expires_in: '',
        caronte: '',
        token_type: ''
      },
      logged: false
    };

  }

};

export default mutations;
