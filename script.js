// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var tl = gsap.timeline()

tl.from(".nav1>h6",{
    y:-20,
    opacity:0,
    delay:0.8,
    stagger:0.2,
})
tl.from(".page1 h3",{
    opacity:0,
    duration:8,
})

var para = ""

document.querySelector(".right3>p").textContent.split("").forEach(function(abc){
    para += `<span>${abc}</span>`

    document.querySelector(".right3>p").innerHTML=para
})

tl.to(".right3>p>span",{
    scrollTrigger:{
        trigger:".right3>p>span",
        scroller:"body",
        start:"top bottom",
        end:"bottom top",
        // markers:true,
        scrub:2,
       
},
    stagger:.4,
    color:"#000"
})

var goal= document.querySelector(".gola")
var goal1= document.querySelector(".gola1")

document.addEventListener("mousemove",function(e){
goal.style.left = e.x+"px"
goal.style.top = e.y+"px"
goal1.style.left = e.x+"px"
goal1.style.top = e.y+"px"

})

tl.from("page4-part2",{
    ScrollTrigger:{
    trigger:"page4-part2",
    scroller:"body",
    start:"top 1%",
    end:"end 100%",
    markers:true,
   },
    
})

gsap.from(".circle h1,.circle h2,.circle h3",{
y:-1,
color:"rgba(0, 0, 0, 0.493)",
// opacity:0,
delay:2,
duration:2,
scrollTrigger:{
trigger:".circle h1,.circle h2,.circle h3",
scroller:"body",
// markers:true,
start:"top 60%",
end:"top 40%",
scrub:1,
},

})


tl.to(".circle-img,.class-img2,.class-img3",{
    opacity:1,
    // delay:1,
    stagger:1.4,
   scrollTrigger:{
        trigger:".circle-img,.class-img2,.class-img3",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
       scrub:1,
    },
 
})

gsap.from(".class-img3",{
    scale:0.8,
    // rotate:20,
    // rotate:17 ,
    repeat:-1,
    yoyo:true,
    // scrollTrigger:{
    //     trigger:".circle-img,.class-img2,.class-img3",
    //     scroller:"body",
    //     // markers:true,
    //     start:"top 40%",
    //     end:"top 60%",
    //    scrub:1,
    // },
})




// gsap.to(".elem5",{
// scrollTrigger:{
// trigger:".top5",
// pin:true,
// start:"top top",
// end:"bottom bottom",
// endTrigger:".last",
// scrub:1
//  },
//  duration:4,
// y:"-287%",
// ease:"power1"

// })

// gsap.to(".images5>img",{
//   scrollTrigger:{
// trigger:".top5",
// pin:true,
// start:"top bottom",
// // markers:true,
// end:"bottom bottom",
// endTrigger:".last1",
// scrub:1
// },
// y:"-287%",
// ease:"power1"
// })


gsap.from(".srcollmain>h4,.srcollmain>p,.srcollmain>p1,.srcollmain>h3",{
 opacity:0,
 y:18,
 duration:2,
 scrollTrigger:{
    trigger:".srcollmain>h4,.srcollmain>p,.srcollmain>p1,.srcollmain>h3",
    scroller:"body",
    start:"top 70%",
    end:"top 30%",
    // markers:true,
    scrub:1,
 },
 stagger:1,
})
// gsap.from(".img-page3>img",{
// height:0,
// // delay:3,
// opacity:0,
// // scale:2,
// duration:0.2,
// scrollTrigger:{
//     trigger:".img-page3>img",
//     scroller:"body",
//     start:"top bottom",
//     end:"bottom top",
//     // markers:true,
//     scrub:1,
// }
// })


// let sections = document.querySelectorAll(".elem5");
// Shery.imageEffect(".images5", {
//   style: 4,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });
gsap.to(".line1",{
    backgroundColor:"rgba(53, 25, 25, 0.000)",
    blur:2,
    scrollTrigger:{
        trigger:".line1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:1,
    }
})


// var btn=document.querySelector(".elem5>button")

// document.addEventListener("click",function(a){
// gsap.to(".elem5",{
//     y:-600,
//     // opacity:0
// })

// btn.forEach(function(cont){
// cont.addEventListener("click",function(e){
//     gsap.from(".elem5",{
//             y:-600,
//             opacity:0
//          })
// })
// })



var element1 = document.querySelector(".element1")
var pic = document.querySelector(".pict1")
var btn1 = document.querySelector(".element1>button")

btn1.addEventListener("click",function(){
  gsap.to(".element1",{
        y:"-100%",
        delay:0.3,
       duration:0.4,
        opacity:0,
    })
    gsap.to(".element2",{
        y:"-100%",
        // opacity:0,
        delay:0.3,
        duration:0.4,
    })
    gsap.to(".pict1",{
        y:"-100%",
        delay:0.3,
        duration:0.4,
        opacity:0
    })
    gsap.to(".pict2",{
        delay:0.3,
        // opacity:0,
        duration:0.4,
        y:"-125%"
    })

    btn1.style.color="white"
    btn1.style.backgroundColor="black"
    
 })

var element3 = document.querySelector(".element2")
var pic = document.querySelector(".pict2")
var pics = document.querySelector(".pict3")
var btn2 = document.querySelector(".element2>button")

btn2.addEventListener("click",function(){
  gsap.to(".element2",{
    delay:0.3,
    duration:0.4,
        y:"-290%",
        opacity:0,
    })
    gsap.to(".element3",{
        y:"-200%",
        delay:0.3,
        // opacity:0,

        duration:0.4,
    })
    gsap.to(".pict2",{
        y:"-280%",
        delay:0.3,
        duration:0.4,
        // opacity:0,

        // opacity:0
    })
    gsap.to(".pict3",{
        y:"-245%",
        // opacity:0,
        delay:0.3,
        duration:0.4,
    })
    btn2.style.color="white"
    btn2.style.backgroundColor="black"


 })



var element4 = document.querySelector(".element3")
var pic = document.querySelector(".pict3")
var pics = document.querySelector(".pict4")
var btn3 = document.querySelector(".element3>button")

btn3.addEventListener("click",function(){
  gsap.to(".element3",{
        y:"-340%",
        delay:0.3,
        duration:0.4,
        opacity:0,
    })
    gsap.to(".element4",{
        y:"-300%",
        delay:0.3,
        duration:0.4,
    })
    gsap.to(".pict3",{
        y:"-325%",
        delay:0.3,
        duration:0.4,
        opacity:0
    })
    gsap.to(".pict4",{
        y:"-375%",
        delay:0.3,
        duration:0.4,
    })
    btn3.style.color="white"
    btn3.style.backgroundColor="black"

 })
