/**
 *@desc
 *@author wanggaixin
 *@date 2018/5/8
 */

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      radio2:1,
      radio3:1,
      user: {
        username: 'admin',
        password: 'admin'
      },
      Loop: ''
    }
  },
  computed: {
    ...mapState({
      userVuex: state => state.user
    }),
    ...mapGetters([
      'status'
    ])
  },
  methods: {
    login () {
      let params = this.user
      this.$api.common.login(params)
        .then(res => {
          console.log(res)
          this.$store.dispatch('setUserName', 'admin')
          this.$store.dispatch('setUserStatus', true)
        })
    },
    exit () {
      let params = this.user
      this.$api.common.loginOut(params)
        .then(res => {
          console.log(res)
          this.$store.dispatch('setUserName', '')
          this.$store.dispatch('setUserStatus', false)
        })
    },
    example() {
      this.$toongine.device.getNetworkType({
        callback: res => {
          if (res.code !== 0) {
            alert(res.msg)
            return
          }
          alert(JSON.stringify(res.data))
        }
      })
    }

  }
}
