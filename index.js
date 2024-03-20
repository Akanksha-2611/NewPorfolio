
// const hamburger=document.querySelector(".hamburger");
// const navMenu=document.querySelector(".navbar");
// hamburger.addEventListener("click",()=>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })


// -------------------------------------------------------------

// const navSlide = () => {
//     const lines = document.querySelector('.lines');
//     const nav = document.querySelector('.navLink');
    
//     lines.addEventListener('click',() => {
//         nav.classList.toggle('nav-active');
        
//     //Line Animation
//     lines.classList.toggle('toggle');
//     });
   
// }

// navSlide();



// ============================================================


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


