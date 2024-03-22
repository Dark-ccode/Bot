<template>
<div id="head" class="head">
<!---<span class="name ib">Twinker Bot</span>-->
<div class="hi animate__animated animate__fadeInDown">HI THERE... </div>
<div class="writeup animate__animated animate__fadeInLeft">welcome to twinker chat bot.</div>
<div class="stalk animate__animated animate__fadeInUp">
  we are online 24 hours a day, 7 days a week. All your compliants are been attended to as soon as we recieve it.
</div>
</div>

</template>

<script>
//import $ from "jquery"

export default {
  name: 'Header'
}

/*
window.addEventListener('scroll', function(){
console.log(window.scrollY)
if (window.scrollY!=0) {
$(".fixed_head").css("background-color","rgb(2, 27, 48)").css("color","white")
}

if (window.scrollY==0) {
$(".fixed_head").css("background-color","transparent").css("color","steelblue")
//$(".r4,.card,.contributors").hide()
}
})*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  border-bottom-right-radius: 0px;border-bottom-left-radius: 15px;-->
<style scoped>
.ib{display: inline-block;}
.head{position: fixed;width: 100%;box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655);
background-color: rgb(37, 37, 204);top: 0px;height: 220px;color: white;padding: 15px;z-index: -999;}
.headimgs{height: 30px;width: 30px;margin-right: 10px;margin-left: 10px;padding:5px;}
.imgcont{float: right;}
.hi{font-size: 24px;margin-top: 20px;}
.writeup{font-size: 20px;}
.stalk{font-size: 15px;color: rgba(255, 255, 255, 0.89);}

</style>
