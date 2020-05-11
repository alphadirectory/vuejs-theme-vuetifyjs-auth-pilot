import axios from 'axios';

const ENV_PRODUCTION = false;

let config = {};
// ttp://crm.api.advancedservice.com.br/api/pessoa?search=
if (!ENV_PRODUCTION) {
  config = {
    api: serialize('crm.api.advancedservice.com.br/api/'),
    auth: serialize('guard.advancedservice.com.br/api/'),
    pusher: {
      key: '5e69969fec2396356747'
    },
  };
} else {
  config = {
    api: serialize('192.168.0.48:7011/api/'),
    auth: serialize('guard.advancedservice.com.br/api/'),
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
