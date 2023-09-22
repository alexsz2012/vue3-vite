import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import 'virtual:svg-icons-register';

import 'default-passive-events';
import { createApp } from 'vue';
import '/@/styles/index.less';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import { setupGloabDirectives } from './directives'
import './router/permission'

const app = createApp(App)
app.use(store);
app.use(router);
setupGloabDirectives(app);
app.mount('#app')
