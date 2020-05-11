import { axios } from '@/config';

const serviceDashboard = {
  async getCotacoes() {
    return axios.get(`https://economia.awesomeapi.com.br/json/all/`);
  },
};

export default serviceDashboard;
