import axios from 'axios';

const ENV_PRODUCTION = false;

let config = {};
if (!ENV_PRODUCTION) {
  config = {
    api: serialize('127.0.0.1:8000'),
    auth: serialize('127.0.0.1:8001'),
    pusher: {
      key: '5e69969fec2396356747'
    },
  };
} else {
  config = {
    api: serialize('api.minhaapi.com.br'),
    auth: serialize('api.autenticacao.com.br'),
    pusher: {
      key: '5e69969fec2396356747'
    },
  };
}

const storeKeys = {
  session: "@SESSION",
  auth: "@AUTH",
  matricula: "@MATRICULA"
};

function serialize(url, ssl = false) {
  return {
    url: (ssl) ? `https://${url}` : `http://${url}`,
    key: '-',
    secret: '-',
    token: btoa(`-:`)
  };
}

export { axios, config, storeKeys };
