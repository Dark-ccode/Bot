<template>
<div class="home">
<div class="reshome">
<Header />
<div class="cont">
<!--- messages go here -->
<div class="chatcont" id="chatcont">
<div class="proto none">Send your complains to Twinker.</div>

<!--
<div class="msgcont toright"> 
<div class="main_msg">Hello</div><div class="time">2:00pm</div>
</div>


<div class="msgcont toleft"> 
<div class="main_msg">Welcome to Twinker</div><div class="lt time">2:01pm</div>
</div>
-->
</div>
<br>
<br>
<br>
<br>
<br>
<br>

<!--- messages go here -->

<div class="message_send_cont">
<div class="r0">
 <div class="trending desnone">
<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft delay2">Who is the current Chemical Engineering head of department?</div>
<div class="mainq animate__animated animate__fadeInLeft delay1">How do I calculate my semester result?</div>
</div>

<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft delay3">What are the Career paths in chemical Enginnering?</div>
</div>

<div class="questioncont">
<div class="mainq animate__animated animate__fadeInUp delay4">How to query my remita?</div>
<div class="mainq animate__animated animate__fadeInUp delay4">carry over?</div>
</div>

<div class="questioncont">
<div class="mainq animate__animated animate__fadeInUp">Add on course?</div>
<div class="mainq animate__animated animate__fadeInUp">Post examinations?</div>
</div>
</div>


<div class="trending resnone">
<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft delay2">Who is the current Chemical Engineering head of department?</div>
<div class="mainq animate__animated animate__fadeInLeft delay1">How do I calculate my semester result?</div>
<div class="mainq animate__animated animate__fadeInLeft delay3">What are the Career paths in chemical Enginnering?</div>
<div class="mainq animate__animated animate__fadeInUp delay4">How to query my remita?</div>
<div class="mainq animate__animated animate__fadeInUp delay4">carry over?</div>
<div class="mainq animate__animated animate__fadeInUp">Add on course?</div>
<div class="mainq animate__animated animate__fadeInUp">Post examinations?</div>





</div>


</div>
</div>

<div class="r1">
<div class="inputcont">
<div class="inputcontin">
<input type="text" class="in animate__animated animate__fadeInLeft" placeholder="Enter your messsage" v-model="chat" id="in">
</div>
<div class="sendimgbg ib send animate__animated animate__fadeInRight">
    <img src="./../assets/send.png" alt="" class="sendimg">
</div>
</div>
</div>
<div class="r2">
   
<div class="powered animate__animated animate__fadeInRight delay4">Powered by Echelon Tech LLC</div>
</div>
</div>

</div>
</div>

<div class="deskview none">
    use mobile view to see page content
</div>
</div>
</template>

<script>
import Header from './plugins/Chatheader.vue'
//import Footer from './plugins/Footer.vue'
import $ from "jquery"

export default {
name: 'Home',
components: {
Header,
//Footer,
},
data() { 
return {chat:'',response:''}
},
methods:{},
mounted(){

$(".mainq").click(function(){
    //#############################################################################
var time = new Date()
var H = time.getHours()
var M = time.getMinutes()
//var D = time.getDay()
var ampm = H >=12 ? "pm":"am"
H = H % 12 
H = H ? H :12;
M = M < 10 ? "0" + M : M;
var ctime = H + " : " + M + " " + ampm

//#############################################################################
var mytext = $(this).text()
var parent = document.getElementById('chatcont')

let toright  = document.createElement('div')
//toright.className = "toright"
toright.style =`position:relative;color: white;
display: block;width:auto;height: auto;
clear:both;margin-top: 20px;margin-bottom: 0px;clear:both;
float: right;margin-right: 5%;`

let mainchat  = document.createElement('div')
mainchat.classList.add('animate__animated','animate__fadeInUp')

var thechat = document.createTextNode(mytext)
mainchat.appendChild(thechat)
mainchat.style =`padding-left: 0px;padding-right: 0px;font-size: 14px;background-color: #008a31;padding: 10px;width:auto;border-radius: 5px;`

let ttime  = document.createElement('div')
ttime.classList.add('animate__animated','animate__fadeInUp','delay4')

ttime.style =`font-size: 10px;float: right;color:black`
var thetime = document.createTextNode(ctime)
ttime.appendChild(thetime)


toright.appendChild(mainchat)
toright.appendChild(ttime)
parent.appendChild(toright)



function showmsg(){
////////////////////////////////////////////////////////////values for the different questions///////////////////////////////////////////////

if(mytext == "Who is the current Chemical Engineering head of department?" ){ 
    this.response = `The current chemical engineering head of department, is Engr. Dr. D. Oke`;
}

if(mytext == "How do I calculate my semester result?" ){ 
    this.response = `visit www.nsche-mouau.edu.ng/#/ to calculate your result, and see other result tips.`;
}


if(mytext == "What are the Career paths in chemical Enginnering?" ){ 
    this.response = `visit www.nsche-mouau.edu.ng/#/career to learn more.`;
}



if(mytext == "How to query my remita?" ){ 
    this.response = `visit the MOUAU official website, login to your account, you will see at the top of the site, a button Query remita, click there it will bring you to a page where you can be able to confirm your remita payment.`;
}
if(mytext == "carry over?" ){ 
    this.response = `Make sure you carry over your courses per semester, to ease the load in your final year and avoid extra year, you can see more info on the official MOUAU site.`;
}

if(mytext == "Add on course?" ){ 
    this.response = `Before you add a course to any semester make sure it won't sum up to excess credit load to avoid the result, destroying your GP.`;
}

if(mytext == "Post examinations?" ){ 
    this.response = `Post examination might be conducted for those who coulden't make it to the main exams, due to some critical reasons with proof.`;
}


let toleft  = document.createElement('div')
//toleft.className = "toleft"
toleft.style =`position:relative;color: black;
display: block;width:80%;height: auto;
padding: 5px;margin-top: 20px;margin-bottom: 0px;clear:both;
float: left;margin-left: 0%;text-align:left;`
let mainchat2  = document.createElement('div')
mainchat2.classList.add('animate__animated','animate__fadeInLeft')

var thechat2 = document.createTextNode(this.response)

mainchat2.appendChild(thechat2)
mainchat2.style =`padding-left: 0px;padding-right: 0px;font-size: 14px;background-color:#f5f5f6;padding: 10px;width:auto;border-radius: 5px;`

let tttime  = document.createElement('div')
tttime.classList.add('animate__animated','animate__fadeInLeft','delay3')

// time.setAttribute('class','time')
tttime.style =`font-size: 10px;float: left;`
var thetime2 = document.createTextNode(ctime)
tttime.appendChild(thetime2)

toleft.appendChild(mainchat2)
toleft.appendChild(tttime)
parent.appendChild(toleft)
}

setTimeout(showmsg,1000)

/**/
}) 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".send").click(function(){
    //#############################################################################
var time = new Date()
var H = time.getHours()
var M = time.getMinutes()
//var D = time.getDay()
var ampm = H >=12 ? "pm":"am"
H = H % 12 
H = H ? H :12;
M = M < 10 ? "0" + M : M;
var ctime = H + " : " + M + " " + ampm

//#############################################################################
var parent = document.getElementById('chatcont')
let toright  = document.createElement('div')
this.chat = document.getElementById('in').value
//toright.className = "toright"
toright.style =`position:relative;color: white;
display: block;width:auto;height: auto;
clear:both;margin-top: 20px;margin-bottom: 0px;clear:both;
float: right;margin-right: 0%;`

let mainchat  = document.createElement('div')
//var chatin   =this.chat
var thechat  = document.createTextNode(this.chat)
mainchat.appendChild(thechat)
mainchat.style =`padding-left: 0px;padding-right: 0px;font-size: 14px;background-color: #008a31;padding: 10px;width:auto;border-radius: 5px;`

let ttime  = document.createElement('div')
ttime.style =`font-size: 10px;float: right;color:black`
var thetime = document.createTextNode(ctime)
ttime.appendChild(thetime)


toright.appendChild(mainchat)
toright.appendChild(ttime)
parent.appendChild(toright)



function showmsg2(){
////////////////////////////////////////////////////////////values for the different questions///////////////////////////////////////////////
if(this.chat != "" ){ 
    this.response = `Hang on we will reply your message shortly.`;
}


let toleft  = document.createElement('div')
//toleft.className = "toleft"
toleft.style =`position:relative;color: black;
display: block;width:80%;height: auto;
padding: 5px;margin-top: 20px;margin-bottom: 0px;clear:both;
float: left;margin-left: 0%;text-align:left;`
let mainchat2  = document.createElement('div')
var thechat2 = document.createTextNode(this.response)

mainchat2.appendChild(thechat2)
mainchat2.style =`padding-left: 0px;padding-right: 0px;font-size: 14px;background-color:#f5f5f6;padding: 10px;width:auto;border-radius: 5px;`

let tttime  = document.createElement('div')
// time.setAttribute('class','time')
tttime.style =`font-size: 10px;float: left;`
var thetime2 = document.createTextNode(ctime)
tttime.appendChild(thetime2)

toleft.appendChild(mainchat2)
toleft.appendChild(tttime)
parent.appendChild(toleft)
}

setTimeout(showmsg2,1000)

/**/
}) 

//image selection
var imgin = document.getElementById("imagein")
imgin.onchange= () =>{
//  const seleceted_img = imgin.files[0];
//console.log(seleceted_img)
var v = document.getElementById("imagein").src= imgin.value;
console.log(v)

}

$(".file_btn").click(function(){imgin.click()})

},




}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
/* .deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: #008a31;text-transform: uppercase;} */
.desnone{display: none;}

.resnone{display:block}
    
input{outline: none;}
.none{display: none;}
.cont{margin-top: 240px;padding: 0px;}
.ib{display: inline-block;}
.inputcont{margin-top: 0px;height: 50px;padding-left: 5px;padding-bottom: 5px;display: flex;flex-direction: row;}
.inputcontin{border: 2px solid #008a31;width: 90%;height: 100%;background-color: #f5f5f6;color: black;padding-left: 5px;
font-size: 14px;border-radius: 15px;margin-left: 0%;}
.in{width: 100%;height: 100%;border: none;padding-left: 15px;background-color: transparent;border-radius: 15px;}
.in:focus{font-size: 14px;border-radius: 15px;}
.sendimg{width: 45px;margin-right: 5px;margin-left: 10px;padding:5px;background-color: #008a31;border-radius: 15px;height: 40px;}

.message_send_cont{position: fixed;bottom: 0px;width: 100%;background-color:white;padding: 0px;margin-top: 20px;box-shadow:#f5f5f6 0px 0px 2px 2px ;padding-top: 5px;}
.r2{/*display: flex;flex-direction: row;*/padding-bottom: 2px;}
.utility_img{width: 25px;height: 23px;padding: 2px;margin-left: 5px;margin-right: 5px;}
.fcont{float:left;display: inline-block;}
.powered{font-size: 13px;margin-left: 0px;margin-top: 5px;color: #008a31;font-weight: bold;display:block;text-align: center;}
.chatcont{padding-bottom: 240px;height: 700px;max-height: 1000px;}
.main_msg{padding-left: 15px;padding-right: 15px;font-size: 14px;}
.proto{font-size: 14px;color:black;box-shadow:#f5f5f6 0px 0px 2px 2px ;width: 80%;margin-left: 10%;padding: 4px;border-radius: 15px;}

.r1{padding-top: 20px;}
.questioncont{width: 100%;height: auto;display: flex;flex-direction: row;font-size: 15px;margin-left: 0%;justify-content: right;}
.mainq{box-shadow: 2px 2px 2px 2px rgb(242, 241, 241);font-size: 14px;border-radius: 15px;margin-left: 4px;margin-right: 4px;padding: 4px;margin-top: 5px;
margin-bottom: 5px;color:#008a31;font-weight:bold}
.r0{height: 110px;overflow-y: scroll;}

.delay1{animation-delay: 2s;/*animation-iteration-count: infinite;*/}
.delay2{animation-delay: 3s;/*animation-iteration-count: infinite;*/}
.delay3{animation-delay: 4s;/*animation-iteration-count: infinite;*/}
.delay4{animation-delay: 5s;/*animation-iteration-count: infinite;*/}




@media screen and (max-width:480px){
.inputcontin{border: 2px solid #008a31;width: 90%;height: 100%;background-color: #f5f5f6;color: black;padding-left: 0px;}
.desnone{display:block}
.resnone{display:none}






}

</style>
