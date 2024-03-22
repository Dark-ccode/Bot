<template>
<div class="home">
<div class="reshome">
<Header />
<div class="cont">
<div class="pageH animate__animated animate__fadeInDown">Login</div>

<!--
<div class="for_name animate__animated animate__fadeIn" >
<input class="input inname" type="text" placeholder="Name" v-model="name" v-on:click="focus()" >
<div class="place1 p1 none animate__animated animate__tada ib">Name</div>
</div>
-->
<br>
<br>
<div class="for_mail fm1 animate__animated animate__fadeIn">
<input class="input inemail" type="text" placeholder="Login code 12345" v-model="email" v-on:click="focus()">
<!--<input class="input inemail" type="text" placeholder="Registration number" v-model="email" v-on:click="focus()">-->
<div class="place1 p2 none animate__animated animate__tada ib">Reg Number</div>
</div>

<!---
<div class="for_mail fm2 none animate__animated animate__fadeIn">
<input class="input inemail" type="text" placeholder="ID number" v-model="email" v-on:click="focus()">
<div class="place1 p2 none animate__animated animate__tada ib">ID number</div>
</div>

<div class="iam ib">Are you a staff? </div> <div class="link ib" v-on:click="showlink()">Login here</div>
-->

<div class="e animate__animated animate__tada">Registration number not found on database.</div>

<button type="submit" class="submit sub animate__animated animate__fadeInUp pressed"> Login </button>

<button type="submit" class="sub animate__animated animate__fadeInUp loadbtn anime none"> 
  Authenticating
  <span class="ib animate__animated animate__fadeInLeft dot d3"> .</span>
  <span class="ib animate__animated animate__fadeInLeft dot d2"> .</span>
  <span class="ib animate__animated animate__fadeInLeft dot d1"> .</span>
   </button>
</div>
<Footer />
</div>

<div class="deskview none">
    use mobile view to see page content
</div>
</div>
</template>

<script>
import Header from './plugins/Loginheader.vue'
import Footer from './plugins/Footer.vue'
import 'animate.css';

import $ from "jquery"
export default {
name: 'Home',
components: {
Header,
Footer,
},
 data() { 
  return {name:"",email:"",K:0}
  },
 
methods:{
/*showlink: function(){
//var password  = document.getElementById("password")
this.K++;
if(this.K==1){
$(".iam").text("Are you a Student?")
$(".pageH").text("Staff Login")
$(".loadbtn").hide()
$(".input").css("border","none")
$(".fm1").hide()
//$(".p1,.p2").hide()
$(".fm2").show()
localStorage.P = this.K
}
else if(this.K==2){
this.K = 0; 
$(".loadbtn").hide()
$(".input").css("border","none")
$(".iam").text("Are you a Staff?")
$(".pageH").text("Student Login")
$(".fm1").show()
//$(".p1,.p2").hide()
$(".fm2").hide()
localStorage.P = this.K
}},*/

focus(){
//$(".input").css("text-transform","uppercase")
}

  },
mounted(){
//$(".submit").text("Authenticating").css("background-color","rgb(37, 37, 204)") localStorage.getItem('name')

$(".submit").click(function(){
function loader(){
//this.$router.push('/Home')

window.location.href='#/Home'
}
var email = $(".inemail").val()
//var name = $(".inname").val()
//if(name=="" && email==""){
if(email==""){
$(".input").css("border","3px solid red")}

//else if(email.includes("MOUAU") || email.includes("mouau")){
else if(email==12345){
//else if(email=="MOUAU/CHE/17/99184"||email=="MOUAU/CIE/18/109120"||email=="MOUAU/CSE/17/95126"||email=="MOUAU/BCH/16/843000"||email=="MOUAU/BCM/17/101360"){
$(".pressed").hide()
$(".loadbtn").show()

//mouau/che/17/99184
//localStorage.name = name
localStorage.email = email
setTimeout(loader,3000)

}
// else if(email!="MOUAU/CHE/17/99184"||email!="MOUAU/CIE/18/109120"||email!="MOUAU/CSE/17/95126"||email!="MOUAU/BCH/16/843000"||email!="MOUAU/BCM/17/101360"){$(".e").show()}
// })

else if(email!=12345){$(".e").show()}
})

$(".inname").click(function(){
$(".p2").hide()
$(".p1").show(300)
$(".inname").attr("placeholder","").css("border","3px solid rgb(37, 37, 204)")
$(".inemail").attr("placeholder","Registration number").css("border","none")

$(".e").hide()

})

$(".inemail").click(function(){
$(".p1").hide()
$(".p2").show(300)
$(".inemail").attr("placeholder","").css("border","3px solid rgb(37, 37, 204)")
$(".inname").attr("placeholder","Name").css("border","none")
$(".e").hide()

})


}
}


</script>

<!-- animate_animated animate_bounce Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: rgb(37, 37, 204);text-transform: uppercase;}

@media screen and (max-width:480px){
      input{outline: none;}

.cont{margin-top: 220px;padding: 10px;text-align: center;background-color: white;}
.ib{display: inline-block;}
.pageH{font-size:21px;font-weight: bolder;margin-bottom: 0px;margin-top: 0px;color:rgb(37, 37, 204);display: inline-block;}
.input{margin-top: 0px;border-top: 3px solid white;height:40px;width:100%;margin-top:20px;margin-bottom: 10px;
background-color: transparent;border-radius: 15px;font-size: 14px;padding-left: 10px;box-shadow:#f5f5f6 0px 0px 4px 4px ;border:none;}
.sub{width: 90%;height: 40px;background-color:rgb(37, 37, 204) ;border-radius: 15px;;margin-top:30px;margin-bottom: 20px;color: white;border: none;}
.place1{position: absolute; background-color: white;color:rgb(37, 37, 204) ;
font-size: 14px;margin-top: -65px;margin-left: 72%;padding:4px;font-weight: bolder;}
.p2{width: 35%;margin-left: 52%}
.none{display: none;}
.dot{margin-left: 2px;margin-right: 2px;font-size: 18px;font-weight: bold;}
.e{color: red;font-size: 13px;margin-top: 10px;display: none;}
.iam{font-size: 14px;margin-top: 20px;}
.link{font-weight: bold; color: rgb(37, 37, 204) ;}
@keyframes fade {
from { opacity: 1.0; }
50% { opacity: 0.5;background-color: rgb(37, 37, 204);color:white }
to { opacity: 1.0; }
}

.anime {
animation:fade 3000ms infinite;
-webkit-animation:fade 3000ms infinite;
}

.d1{animation-delay: 1.5s;animation-iteration-count: infinite;}
.d2{animation-delay: 2.5s;animation-iteration-count: infinite;}
.d2{animation-delay: 3.5s;animation-iteration-count: infinite;}
}
</style>
