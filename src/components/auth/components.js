import vue from 'vue';

import auth from './index';
import login from './Atoms/login';
import logout from './Atoms/logout';

vue.component('app-auth', auth);
vue.component('app-login', login);
vue.component('app-logout', logout);
