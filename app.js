const PORTFOLIO=[
        {
          project:1,
          title:'Corner Del Taco',
          link:'https://th3usuario.github.io/cornerdeltaco/',
          description:'A simple page for a local Mexican themed store made in Spanish'
        },
        {
          project:2,
          title:'Lunar Lodge',
          link:'https://th3usuario.github.io/lunarlodge/',
          description:'If you ever wanted to spend a night on the Moon, this landing page will get you there'
        },
        {
          project:3,
          title:'SEO Agency',
          link:'https://th3usuario.github.io/seo-agency/',
          description:'Looking to expand your online business ? Search no more, as this page has all the answers'
        },
        {
          project:4,
          title:'Real Estate',
          link:'https://th3usuario.github.io/real-estate/',
          description:'If you want to find a spot of your own, this is the place to begin'
        },
        {
          project:5,
          title:'Local Bakery',
          link:'https://th3usuario.github.io/local-bakery/',
          description:'Stop from what you are doing and take a delicious break'
        },

];

const TEST=['first','second','third','fourth','fifth'];

// GET BUTTONS AND CONTAINER

const nextBtn=document.querySelector('.next-btn');
const previousBtn=document.querySelector('.previous-btn');
const portfolioContainer=document.querySelector('.portfolio-container');
const carouselContainer=document.querySelector('.carousel-portfolio');




// SHOW PROJECTS
let showProjects=PORTFOLIO.map(function(item){
	return `<div class="card">  
  <div class="card-body" style="background:${generateColor()}">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href="${item.link}" target="_blank" class="btn 
    btn-primary btn-card">Check It Out !</a>
  </div>
</div>

        ` 
});
showProjects=showProjects.join('')
portfolioContainer.innerHTML=showProjects;

// DISPLAY CAROUSEL
showCarousel(PORTFOLIO,0);
movingNext(PORTFOLIO);
movingBack(PORTFOLIO)


function showCarousel(ARRAY,index){
  
 value=	`<div class="card">
    <div class="card-body" style="background:${generateColor()}">
    <h5 class="card-title">${ARRAY[index].title}</h5>
    <p class="card-text">${ARRAY[index].description}</p>
    <a href="${ARRAY[index].link}" target="_blank" 
        class="btn btn-primary btn-card">Check It Out !</a>
  </div>
</div>
        ` 

// const cardImg=document.querySelector('.card-img-top');
// cardImg.style.background=`${generateColor()}`;         
 carouselContainer.innerHTML=value;

}

function movingNext(PORTFOLIO){
	let index=0;
	nextBtn.addEventListener('click',function(){

       if(index<PORTFOLIO.length-1){
       	 index++;
       	 console.log('clicked')
       	 console.log(index)
       }else{
       	index=0;
       }
       showCarousel(PORTFOLIO,index);

});
  

}
function movingBack(PORTFOLIO){
	let index=0;
	previousBtn.addEventListener('click',function(){

       if(index==0){
       	 index=PORTFOLIO.length-1;
       	 console.log('clicked')
       	 console.log(index)
       }else{
       	index-=1;
       }
       showCarousel(PORTFOLIO,index);

});
  

}

// GENERATE COLOR

function generateNumber(){
	let x =Math.ceil(Math.random()*255);
	
    return x;
	
}

function generateColor(){
     let a=generateNumber();
     let b=generateNumber();
     let c=generateNumber();
     let e=generateNumber();
     let f=generateNumber();
     let d=generateNumber();
     let opacity=(Math.random()*1).toFixed(1);
     
     let value=`linear-gradient(rgba(${a},${b},${c},${opacity})
                ,rgba(${e},${f},${d},${opacity}))`;
     
     return value;

     
}
generateColor()


//Add SKIL Separator
const skillSeparator= document.querySelector('.skill-job');

skillSeparator.classList.add('skill-job-point');


// Get Year
function getYear(){
   const d = new Date();
   let year=d.getFullYear();
  return year;
}

const date= document.querySelector('.date');
date.innerHTML+=getYear();



// Invisible HOME
const home=document.querySelector('.back-to-home');
const myHtml=document.querySelector('body');

window.addEventListener('scroll', function(){
  const heightScrolled=window.pageYOffset;
  if (heightScrolled >= 150){
     home.style.display ='block';
     console.log(heightScrolled)
  }else if(heightScrolled ){
    home.style.display ='none';
    
  }
} );


// function showHome(){
  
// }

// showHome();


console.log(window.pageYOffset);






