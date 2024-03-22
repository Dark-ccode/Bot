
<template>
<div id="head" class="head">
<div class="imgcont ib animate__animated animate__tada"> <img src="../../assets/back.png" alt="" class="optimg headimgs " v-on:click="back()"></div>
<!---<span class="name ib">Chemical Engineering Bot</span>-->

<div class="hi animate__animated animate__fadeInDown delay2">Chemical Engineering bot </div>
<div class="name animate__animated animate__fadeInLeft">Welcome to NSCHE bot, converse directly with our admins. </div>

<div class="admins">
<div class="img_name animate__animated animate__fadeInUp delay1">
<div class="aimgcont"> <img src="../../assets/test/secretary.jpeg" alt="" class="optimg headimgs"></div> 

<div class="name name1">George</div>

</div>

<div class="img_name animate__animated animate__fadeInUp delay2">
<div class="aimgcont ct"> <img src="../../assets/test/president.jpg" alt="" class="optimg headimgs"></div> 

<div class="name name2">Wisdom</div>

</div>

<div class="img_name img_name3 animate__animated animate__fadeInUp delay3">
<div class="aimgcont ct"> <img src="../../assets/test/pro.jpg" alt="" class="optimg headimgs"></div> 
<div class="name name3">Daniel</div>
</div>
</div>

</div>

<!--- -->
</template>

<script>
//import $ from "jquery"

export default {
  name: 'Header',
   methods:{
back(){
this.$router.push('/')


}
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only  border-bottom-right-radius: 0px;border-bottom-left-radius: 15px;  display: flex;flex-direction: row;-->
<style scoped>
.ib{display: inline-block;}
.head{position: fixed;width: 100%;
background-color: #008a31;top: 0px;height: 220px;color: white;padding: 15px;z-index: 999;text-align: center;}

/* box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655); */
.headimgs{height: 80%;width: 80%;margin-left: 10%;margin-top: -10%;}
.imgcont{float: right;margin-right: -10px;margin-top: -10px;/*border: 2px solid white;*/padding: 5px;border-radius: 50%;width: 35px;height: 35px;}
.hi{font-size: 23px;margin-top: 28px;}
.writeup{font-size: 20px;}


.admins{width: 100%;height: auto;display: flex;flex-direction: row;font-size: 15px;margin-left: 0%;justify-content:center;margin-top: 20px;}
.headimgs{height: 100%;width: 100%;margin-left: 0%;margin-top: 0%;border-radius: 50%;}
.aimgcont{margin-right: -10px;margin-top: 5px;padding: 1px;border-radius: 50%;width: 35px;height: 35px;background-color: white;}
.img_name{margin-left: 8px;margin-right: 12px;text-align: center;}
.img_name3{margin-left: 15px;margin-right: 0px;text-align: center;}

.name{margin-left: 8px;margin-right: 10px;text-align: center;}
.name1{margin-left: -8px;margin-right: 12px;text-align: center;}
.name2{margin-left: -5px;}

.ct{margin-left: 10px;}
.delay1{animation-delay: 2s;/*animation-iteration-count: infinite;*/}
.delay2{animation-delay: 3s;/*animation-iteration-count: infinite;*/}
.delay3{animation-delay: 4s;/*animation-iteration-count: infinite;*/}
.delay4{animation-delay: 5s;/*animation-iteration-count: infinite;*/}

</style>
