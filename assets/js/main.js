const navbar=document.querySelector('.navbar');
const headerContenth1=document.querySelector('.header-content h1');
const loading=document.querySelector('.loading');
const scrollToTopBtn= document.querySelector('.scroll-to-top');
const secondSection= document.getElementById('second-section');
const windowHome=document.querySelector('.window');
const home=document.querySelector('.navbar .home');
let width=window.innerWidth;
const menuInformation=document.querySelector('.menu-information');
const leftTri=document.querySelector('.first-column');
const rightTri=document.querySelector('.second-column');
const menuItems1=document.querySelectorAll('.menu-item-1 .f');
const menuItems2=document.querySelectorAll('.menu-item-2 div');
// transitions 
const homeRessrvation=document.querySelector('.home-res');
const group=document.querySelector('.reservation .text-center h2');
const group1=document.querySelector('.reservation .text-center p');
const group2=document.querySelector('.reservation .text-center span')

window.addEventListener('scroll',function(){
if(window.scrollY>=headerContenth1.offsetTop){
    navbar.style.backgroundColor="#00000038"
    navbar.style.backdropFilter= "blur(12px)"
}
else{
    navbar.style.backgroundColor="unset"
    navbar.style.backdropFilter= "unset"

}
if(window.scrollY > secondSection.offsetTop){
    scrollToTopBtn.classList.remove('opacity-0','invisible')
}
else{
    scrollToTopBtn.classList.add('opacity-0','invisible')
}
})    

window.addEventListener('load', function(){
    this.setTimeout(function(){
        loading.classList.add('opacity-0','invisible')
        document.body.style.overflow='auto'
      
    }, 1100)
}) 

scrollToTopBtn.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior:'smooth'
    })

})

if(width >=1100){
home.addEventListener('mouseover', () => {
    windowHome.style.display = 'block';
    windowHome.addEventListener('mouseover', () => {
        windowHome.style.display = 'block';
        
    }); 
    
});

home.addEventListener('mouseout', () => {
    windowHome.style.display = 'none';
    windowHome.addEventListener('mouseout', () => {
        windowHome.style.display = 'none';
      });
     });
    }

for(let i=0;i< menuItems1.length;i++){
   menuItems1[i].addEventListener('mouseover', () => {
    
    menuInformation.style.display='block';
    leftTri.style.display='block';
   });
   menuItems1[i].addEventListener('mouseout', () => {
    menuInformation.style.display='none';
    leftTri.style.display='none';
   });
}

window.addEventListener('scroll', () => {
    if(window.scrollY>=homeRessrvation.offsetTop){
       group.style.opacity=1
       group2.style.opacity=1
       group1.style.opacity=1
    }

})