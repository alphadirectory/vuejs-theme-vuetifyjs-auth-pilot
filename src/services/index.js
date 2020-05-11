import serviceAuth from '@/components/auth/services';
import serviceDashboard from '@/components/dashboard/services';
import vue from 'vue';

vue.prototype.$serviceAuth = serviceAuth;
vue.prototype.$serviceDashboard = serviceDashboard;
