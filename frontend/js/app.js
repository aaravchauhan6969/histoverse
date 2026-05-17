window.onload = () => {

    window.scrollTo(0,0);


    typeEffect();
};

const text =
"Where Mythology, History and Legends Come Alive";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,50);
    }
}

function scrollToStories(){

    document.querySelector(".stories-section")
    .scrollIntoView({

        behavior:"smooth"
    });
}
const music =
document.getElementById("bg-music");

music.volume = 0.15;

document.body.addEventListener("click",()=>{

    music.play();

},{
    once:true
});