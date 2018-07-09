
import Api from '../axios'

const apiURL = {
  // mock登录数据
  login: '/login',
  getUserInfo: '/user/info',
  loginOut: '/loginOut',
  pageList: 'http://172.28.33.124:8081/form/list', // 获得组织结构树
  getSave: 'http://172.28.33.124:8081/form/save', // 编辑

  createBoard: 'http://172.28.33.124:8081/template/saveTempate',
  getBoardList: 'http://172.28.33.124:8081/template/getTemplateList',
  delBoard: 'http://172.28.33.124:8081/template/delTempate',
  getOrgList: 'http://172.28.33.124:8081/getOrgList'
}

export default {

  login(obj) {
    return Api.get(apiURL.login, obj)
  },
  getUserInfo(obj) {
    return Api.get(apiURL.getUserInfo, obj)
  },
  loginOut(obj) {
    return Api.get(apiURL.loginOut, obj)
  },
  // 获得组织结构树

  pageList(obj) {
    return Api.get(apiURL.pageList, obj)
  },
  // 编辑
  pageSave(obj) {
    return Api.get(apiURL.getSave, obj)
  },
  createBoard(obj) {
    return Api.get(apiURL.createBoard, obj)
    // 创建新模板
  },
  editBoard(obj) {
    return Api.get(apiURL.createBoard, obj)
  },
  getBoardList(obj) {
    return Api.get(apiURL.getBoardList, obj)
    // 获取模板列表
  },
  delBoard(obj) {
    return Api.get(apiURL.delBoard, obj)
    // 删除模板
  },
  getOrgList(obj) {
    return Api.get(apiURL.getOrgList, obj)
    // 删除模板
  }
}
