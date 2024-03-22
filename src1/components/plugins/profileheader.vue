<template>
<div id="head" class="head">
<div><router-link to="/Home" class="imgcont ib">  <img src="../../assets/back.png" alt="" class="optimg headimgs"></router-link></div>
<br>
<div class="pimgcont animate__animated animate__bounceIn"> <img src="../../assets/wuser.png" alt="" class="pimg"> </div>
<div class="username animate__animated animate__tada">{{name}}</div>
<br>

<div class="editcont">
<div class="bbt" title="This function helps you to hide or show your details to other users, you can switch between visible or hidden mode.">
  <div class="off ib act" >hide</div>
  <div class="on ib act">show</div>
</div>
</div>
</div>

<!--- -->
</template>

<script>
import $ from "jquery"

export default {
  name: 'Header',data() { 
  return { name:localStorage.getItem('name')}
},
mounted () {
var uname  = document.getElementById("uname")
var ureg  = document.getElementById("ureg")
var ud = document.getElementById("ud")
var ud1 = document.getElementById("ud1")
var ud2 = document.getElementById("ud2")
var ud3 = document.getElementById("ud3")
var ud4 = document.getElementById("ud4")


$(".on").click(function(){
$(this).css("background-color","white").css("color","white")
$(this).css("height","30px").css("margin-top","-5px")

$(".off").css("background-color","white").css("color","rgb(37, 37, 204)")
$(".off").css("height","20px").css("margin-top","0px")

uname.type = 'password';
ureg.type = 'password';
ud.type = 'password';
ud1.type = 'password';
ud2.type = 'password';
ud3.type = 'password';
ud4.type = 'password';

})


$(".off").click(function(){
$(this).css("background-color","white").css("color","white")
$(this).css("height","30px").css("margin-top","-5px")
$(".on").css("background-color","white").css("color","rgb(37, 37, 204)")
$(".on").css("height","20px").css("margin-top","0px")

uname.type = 'text';
ureg.type = 'text';
ud.type = 'text';
ud1.type = 'text';
ud2.type = 'text';
ud3.type = 'text';
ud4.type = 'text';

})

}


}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only  border-bottom-right-radius: 0px;border-bottom-left-radius: 15px;-->
<style scoped>
.ib{display: inline-block;}
.head{position: fixed;width: 100%;box-shadow: 0px 0px 2px 2px rgba(245, 245, 245, 0.655);
background-color: rgb(37, 37, 204);top: 0px;height: 220px;color: white;padding: 15px;z-index: 999;text-align: center;
/*border-bottom-left-radius: 10%;border-bottom-right-radius: 10%;*/}
.headimgs{height: 80%;width: 80%;margin-left: 10%;margin-top: -10%;}
.imgcont{float: right;margin-right: -10px;margin-top: -10px;padding: 5px;border-radius: 50%;width: 35px;height: 35px;z-index: 999;
padding: 5px;border-radius: 50%;}
.pimgcont{font-size: 26px;margin-top: 0px;width: 70px;height: 70px;margin-left: 40%;border-radius: 50%;
/*background-color: rgba(251, 251, 251, 0.926)*/;padding: 8px; box-shadow:#f5f5f6 0px 0px 4px 4px ;}
.pimg{height: 80%;width: 80%;}
.username{font-size: 18px;margin-top: 20px;text-transform: capitalize;}
.editcont{text-align: left;margin-top: 0px;font-size: 13px;display: flex;flex-direction: row;font-size: 15px;margin-left: 0%;/*justify-content: right;width: 100%;*/}
.bbt{background-color: white;width: 80px;margin-left: 5px;display: flex;flex-direction: row;border-radius: 4px;margin-top: 0px;height: 20px;}
.act{width: 40px;text-align: center;height: 100%;padding: 2px;border-radius:15%;font-size: 13px;}
.off{border-radius:4px;background-color:white;color:white ;height: 30px;margin-top: -5px;border-radius:15%;}
/*.on{border-top-left-radius: 15px;border-bottom-left-radius: 15px;background-color:black;color: black;}*/
/*.off{border-bottom-right-radius: 15px;border-bottom-right-radius: 15px;}*/
.on{border-radius:4px;color:  rgb(37, 37, 204);}
</style>
