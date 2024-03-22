<template>
<div class="home">
<div class="reshome">

<Header />
<br>
<div class="cont">

<div class="incont animate__animated animate__fadeIn">
<div class="label"> name</div>
<input class="input" type="text" v-model="name" id="uname" disabled>
</div>
<br>
<div class="incont animate__animated animate__fadeIn">
<div class="label"> Registration number</div>
<input class="input" type="text" v-model="email" id="ureg" disabled>
</div>
<br>
<div class="incont dept">
<div class="label"> Department</div>
<input class="input" type="text" v-model="dept" id="ud" disabled>
</div>
<br>

<div class="incont dept">
<div class="label"> Year</div>
<input class="input" type="text" v-model="year" id="ud1" disabled>
</div>
<br>
<div class="incont dept">
<div class="label"> Level</div>
<input class="input" type="text" v-model="level" id="ud2" disabled>
</div>
<br>
<div class="incont dept">
<div class="label"> Email</div>
<input class="input" type="text" v-model="main_email" id="ud3" disabled>
</div>
<br>
<div class="incont dept">
<div class="label"> Phone</div>
<input class="input" type="text" v-model="phone" id="ud4" disabled>
</div>
<br>

<router-link to="/" class="rm animate__animated animate__fadeInUp">LOGUT <img src="../assets/exit.png" alt="" class="rmimg"></router-link>

</div>
<Footer />
</div>

<div class="deskview none">
    use mobile view to see page content
</div>
</div>
</template>

<script>
import Header from './plugins/profileheader.vue'
import Footer from './plugins/Footer.vue'
//import $ from "jquery"

export default {
name: 'Home',
components: {
Header,
Footer,
},
 data() { 
  return {returned:"", name:"",email:localStorage.getItem('email'),dept:"",year:"",level:"",main_email:"", phone:""}
},
mounted(){
  
/*if(this.email.includes("cie") || this.email.includes("CIE")){this.dept="Computer Engineering"}
if(this.email.includes("cie") || this.email.includes("CIE")){this.dept="Computer Engineering"}
if(this.email.includes("che") || this.email.includes("CHE")){this.dept="Chemical Engineering"}
if(this.email.includes("bch") || this.email.includes("BCH")){this.dept="Biochemitsry"}
if(this.email.includes("bcm") || this.email.includes("BCM")){this.dept="Microbiology"}
if(this.email.includes("phy") || this.email.includes("PHY")){this.dept="Physics"}
//if(this.K == 1){$(".dept").hide() }
//if(this.K == 0){$(".dept").show()}*/

// if(this.email=="MOUAU/CHE/17/99184"){
// this.dept="Chemical Engineering"
// this.name="Ukonu George Chukwuebuka"
// this.year="2017/2018"
// this.level="400 LEVEL"
// this.main_email="Georgechukwuebuka@gmail.com"
// this.phone="0903643095"
// }


if(this.email=="12345"){
this.dept="User department"
this.name="User name"
this.year="User year"
this.level="user leveL"
this.main_email="User email"
this.phone="User Phone"
}

if(this.email=="MOUAU/CIE/18/109120"){
this.dept="Civil Engineering"
this.name="Amarachi Ifegwu Jane"
this.year="2018/2019"
this.level="300 LEVEL"
this.main_email="Amarachijane@email.com"
this.phone="08160045613"
}

if(this.email=="MOUAU/CSE/17/95126"){
this.dept="Computer Engineering"
this.name="Amandu Presious"
this.year="2017/2018"
this.level="400 LEVEL"
this.main_email="Amandpresious20@email.com"
this.phone="07018002401"
}

if(this.email=="MOUAU/BCH/16/843000"){
this.dept="Bio Chemistry"
this.name="Okorie Blessing"
this.year="2016/2017"
this.level="500 LEVEL"
this.main_email="OkorieBlessing60@email.com"
this.phone="07012009845"
}

if(this.email=="MOUAU/BCM/17/101360"){
this.dept="Micro Biology"
this.name="Austin Patience"
this.year="2017/2018"
this.level="400 LEVEL"
this.main_email="AustinPatience100@email.com"
this.phone="07012009845"
}


}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: rgb(37, 37, 204);text-transform: uppercase;}

@media screen and (max-width:480px){
      input{outline: none;}

    .none{display: none;}
.cont{margin-top: 220px;padding: 10px;background-color: white;margin-bottom: 40px;}
.ib{display: inline-block;}
.w{font-size: 21px;margin-right: 5px;}
.input{height: 35px; padding: 5px;border: none;box-shadow:#f5f5f6 0px 0px 4px 4px ;text-transform: uppercase;
font-size: 14px;width: 100%;margin-left: 0%;border: none;border-radius: 15px;}
.label{font-size: 14px;margin-left: 0%;margin-bottom: 10px;}
.incont{margin-bottom: 0px;margin-top: 0px;}
.rm{margin-top: 20px;font-size: 14px;width: 80%;margin-left: 10%;border-radius: 15px;text-align: center;
background-color: rgb(37, 37, 204);height: 35px;color: white;padding: 5px;display: block;text-decoration: none;}
.rmimg{height: 17px;width: 17px;margin-left: 5px;}
.router-link-active{display: block;}
*{user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -khtml-user-select:none;
    }
    
}
</style>
