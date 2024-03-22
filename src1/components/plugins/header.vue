<template>
<div id="head" class="head">
<!--<router-link to="/Profile" class="imgcont ib">  <img src="../../assets/wuser.png" alt="" class="optimg headimgs"></router-link>-->
<!---<span class="name ib">Twinker Bot</span>-->
<div class="hi ib animate__animated animate__fadeInDown">HI THERE... </div>
<div class="writeup ib animate__animated animate__fadeInLeft">welcome to twinker bot chat</div>
<div class="stalk ib animate__animated animate__fadeInUp">
  Send us your messages,our auto-responder will reply you.
</div>
</div>

<!--- -->
</template>

<script>
import $ from "jquery"
import 'animate.css';

export default {
  name: 'Header',
  methods:{
shownav(){
$(".navcont").show(500)

}
}}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only  border-bottom-right-radius: 0px;border-bottom-left-radius: 15px;-->
<style scoped>
.ib{display: inline-block;}
.head{position: fixed;width: 100%;box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655);
background-color: rgb(37, 37, 204);top: 0px;height: 220px;color: white;padding: 15px;z-index: -2;overflow-x: hidden;}
.headimgs{height: 80%;width: 80%;margin-left: 10%;margin-top: -10%;}
.imgcont{float: right;margin-right: -10px;/*margin-top: -10px;border: 2px solid white;*/padding: 5px;border-radius: 50%;width: 35px;height: 35px;z-index: 999;}
.hi{font-size: 24px;margin-top: 35px;}
.writeup{font-size: 20px;}
.stalk{font-size: 13px;color: rgba(255, 255, 255, 0.89);}

</style>
