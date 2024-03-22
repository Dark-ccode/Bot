<template>
<div class="home">
<div class="reshome">
<Header />
<router-link to="/Profile" class="imgcont ib absol animate__animated animate__flash">  <img src="../assets/wuser.png" alt="" class="optimg headimgs"></router-link>

<br>
<div class="cont">
<!--beginning of startup div -->
<div class="start_conversation animate__animated animate__fadeInUp">
    <div class="message">Start another Conversation.</div>
    <div class="inputcont" v-on:click="send()">
    <img src="../assets/send.png" alt="" class="sendimg" >send us a message</div>
</div>
<!---end of trending div -->


<!---start of trending div -->
<br>
<div class="trending">
<div class="sechead">Trending Reports</div>
<div class="maintrendscont">
<!---example trend -->
<div class="trendscont animate__animated animate__fadeInRight delay1">
<img src="../assets/water.jpg" alt="" class="trendimg">
<div class="remcont">
    <div class="headline">Poor drinking water</div>
    <div class="report_body">The students living in the hostel, have compliend about lack of clean water in the hostel.</div>
    <div class="rm">Read more</div>
</div>
</div>

<div class="trendscont animate__animated animate__fadeInRight delay2">
<img src="../assets/bribe.jpg" alt="" class="trendimg">
<div class="remcont">
    <div class="headline">Complains on illegal levies</div>
    <div class="report_body">Some students have complained on the issue of lecturers imposing illegal payments on them.</div>
    <div class="rm">Read more</div>
</div>
</div>

<div class="trendscont animate__animated animate__fadeInRight delay3">
<img src="../assets/exam.jpg" alt="" class="trendimg">
<div class="remcont">
    <div class="headline">Exam Malpractice </div>
    <div class="report_body">The issues of malpractice on mouau campus is now outrageous.</div>
    <div class="rm">Read more</div>
</div>
</div>

<div class="trendscont formore animate__animated animate__fadeInRight delay4">
<div class="morecont">
<img src="../assets/arrow_blue.png" alt="" class="moreimg">
    
</div>
</div>
 
<!---example trend -->
</div>
</div>

<!---start of frequent div -->
<br>
<div class="trending">
<div class="sechead animate__animated animate__flash">Frequent questions</div>
<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft" v-on:click="send()">When is school resuming?</div>
<div class="mainq animate__animated animate__fadeInLeft" v-on:click="send()">2020 result?</div>

</div>


<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft delay1" v-on:click="send()">How do i find my missing script?</div>
</div>

<div class="questioncont">
<div class="mainq animate__animated animate__fadeInLeft delay2" v-on:click="send()">How to query my remita?</div>
<div class="mainq animate__animated animate__fadeInLeft delay2" v-on:click="send()">carry over?</div>
</div>

<div class="questioncont">
<div class="mainq animate__animated animate__fadeInUp delay3" v-on:click="send()">Add on course?</div>
<div class="mainq animate__animated animate__fadeInUp delay3" v-on:click="send()">Post examinations?</div>
</div>

<div class="questioncont">
<div class="mainq last animate__animated animate__flash delay4" v-on:click="send()"> ...</div>

</div>

</div>

</div>
<Footer />
</div>



<div class="deskview none">
    use mobile view to see page content
</div>

</div>
</template>

<script>
import Header from './plugins/header.vue'
import Footer from './plugins/Footer.vue'

export default {
name: 'Home',
components: {
Header,
Footer},
 data() { 
  return {K:0,email:localStorage.getItem('email'),}
},
 methods:{
send(){
this.$router.push('/Chat')

}}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>
.deskview{display: block;margin-top: 20%;font-size: 25px;text-align: center;color: rgb(37, 37, 204);text-transform: uppercase;}

@media screen and (max-width:480px){
    .none{display: none;}
.cont{margin-top: 220px;padding: 10px;background-color: white}
.ib{display: inline-block;}
.w{font-size: 21px;margin-right: 5px;}

.trending{margin-top: 10px;}
.sechead{font-size: 17px;color: rgb(37, 37, 204);margin-bottom: 15px;}
.trendscont{height: 250px;border: 1px solid rgba(246, 246, 246, 0.842);margin-right: 20px;box-shadow: 2px 2px 2px 2px #f5f5f6;}
.maintrendscont{overflow-x:scroll ;width: auto;height: auto;display: flex;flex-direction: row;
-ms-overflow-style:-ms-autohiding-scrollbar;-ms-overflow-style:none;}
.trendimg{width: 200px;height: 45%;}
.remcont{width: 200px;height: 55%;padding-top: 10px;}
.report_body{font-size: 13px;}
.headline{color: rgb(37, 37, 204)}
.rm{width: 180px;margin-left: 10px; text-align: center;font-size: 15px;margin-top: 10px;border-radius: 5px;background-color: white;font-weight: bold;
color:rgb(37, 37, 204) ;box-shadow: 2px 2px 2px 2px rgb(242, 241, 241);}
.start_conversation{top: 170px;font-size: 16px;width: 90%;height: auto;background-color:white ;color: black;padding-top: 10px;padding-bottom: 0px;
border-radius: 15px;margin-bottom: 40px;position: absolute;margin-left: 2%;box-shadow: 2px 2px 2px 2px rgb(242, 241, 241);text-align: center;padding: 10px;}
.message{padding: 10px;}
.inputcont{background-color: rgb(37, 37, 204);width: 80%;margin-left: 10%;border-radius: 15px;font-size: 15px;color: white;padding: 6px;}

.sendimg{height: 25px;width: 25px;margin-right: 2px;margin-left: 2px;padding:2px;}
.morecont{height: 80px;width: 80px;border-radius: 50%;box-shadow: 2px 2px 2px 2px rgb(242, 241, 241);margin: 30px;margin-top: 70px;}
.moreimg{width: 30%;height: 30%;margin-top: 40%;margin-left: 0%;}
.formore{text-align: center;}
.questioncont{width: 100%;height: auto;display: flex;flex-direction: row;font-size: 15px;margin-left: 0%;justify-content: right;}
.mainq{box-shadow: 2px 2px 2px 2px rgb(242, 241, 241);font-weight:bold;font-size: 13px;border-radius: 15px;color:rgb(77, 77, 244);
margin-left: 4px;margin-right: 4px;padding: 4px;margin-top: 10px;margin-bottom: 10px;}
.last{width: 50px;text-align: center;font-size: 16px;font-weight: bold;}



.headimgs{height: 80%;width: 80%;margin-left: 10%;margin-top: -10%;}
.imgcont{margin-top: -10px;border: 2px solid white;padding: 5px;border-radius: 50%;
width: 35px;height: 35px;position: fixed;top: 25px;right: 15px;}


.delay1{animation-delay: 1.5s;/*animation-iteration-count: infinite;*/}
.delay2{animation-delay: 2.5s;/*animation-iteration-count: infinite;*/}
.delay3{animation-delay: 3.5s;/*animation-iteration-count: infinite;*/}
.delay4{animation-delay: 4.5s;/*animation-iteration-count: infinite;*/}
}
</style>
