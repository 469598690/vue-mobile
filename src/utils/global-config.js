import api from 'api'
import lib from './toongine'  //不可删除
export default function plugin (Vue) {
  Vue.$api = Vue.prototype.$api = api
  Vue.$toongine = Vue.prototype.$toongine = window.toongine
}
