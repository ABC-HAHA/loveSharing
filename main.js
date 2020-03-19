import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false

App.mpType = 'app'
// http://haoyufu.cn

Vue.prototype.$store = store
// Vue.prototype.websiteUrl = 'http://192.168.5.254:8081/earnshare-api';
Vue.prototype.websiteUrl = 'http://haoyufu.cn/earnshare-api';
// Vue.prototype.websiteUrl = 'http://47.108.203.27/earnshare-api';

// Vue.prototype.websiteUrl = 'http://192.168.5.123:8081/earnshare-api';
// Vue.prototype.websiteUrl = 'http://192.168.43.68:8081/earnshare-api';

const app = new Vue({
	...App
})
app.$mount()