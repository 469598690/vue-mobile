<template>
  <div class="wrap">
    <ul>
      <li class="maintop clearfix">
        <div class="logo">
          <img src="./timg.jpg" />
          </div>
       <div>***科技有限公司
         <br>
         欢迎,138****3192您的进入<br>
         含当前剩余天数：2天 <el-button type="primary" size="mini" class="ml10">续费</el-button>
         
       </div>
       
      </li>
    </ul>
<div class="content_list">
<ul class="clearfix">
  <li class="clearfix">
  <div class="avatar">
          <img src="./timg.jpg" />
          </div>
    <div class="right_dec">
      <p>天天之家，每晚200元，五星级的享受，海景房</p>
      <div style="text-align:right;">
      <a>详情</a>
      </div>
    </div>

  </li>
  <li class="clearfix">
  <div class="avatar">
          <img src="./timg.jpg" />
          </div>
    <div class="right_dec">
      <p>天天之家，每晚200元，五星级的享受，海景房</p>
      <div style="text-align:right;">
      <a>详情</a>
      </div>
    </div>

  </li>

</ul>
 
</div>
<el-button type="primary"  class="startwifi">开始上网</el-button>
<p class="tc">重新点击wifi链接便可再次进入此页</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
    methods: {
      addApp() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
.tc{
  text-align: center;
}
.wrap{
  padding: .5rem .4rem;
}
li{
  list-style: none;
  
}
.maintop{
line-height: 1.5;
  text-align: right;
  position: relative;
  
}
.logo{
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo img{
  width: 1.2rem;
  height: 1.2rem;
}
.ml10{
  margin-left: 10px;
}
.right_dec{
  float: right;
   padding-left: 2.2rem;
}
.content_list{
  margin-top: 10px;
    border-bottom: 1px solid #d5d5d5;
}
.content_list li{
  padding: 0.15rem 0px;
  line-height: 2;
 
  position: relative;
  border-top: 1px solid #d5d5d5;
  height: 2.3rem;
}
.avatar{
  width: 2rem;
  height: 2rem;
  position: absolute;
}
.avatar img{
  width: 2rem;
  height: 2rem;
}
.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
.startwifi{
  margin: 40px 0px;
  width: 100%;
}
</style>
