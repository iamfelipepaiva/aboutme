
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden, .hidden-opposite");
hiddenElements.forEach((el) => observer.observe(el));

const titleSection = document.getElementById("title-section");

window.addEventListener('load', function(){
   
    const imagesArray = [
        "url('images/1.jpg')",
        "url('images/2.jpg')",
        "url('images/3.jpg')",
        "url('images/4.jpg')",
        "url('images/5.jpg')",
        "url('images/6.jpg')",
        "url('images/7.jpg')",
     
    ];

function randomBg(){
    const randomBackground = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    titleSection.style.backgroundImage = randomBackground;
};
    setInterval(randomBg, 15000);
});





