document.body.style.opacity = "0";

window.addEventListener("load",()=>{

    document.body.style.transition =
    "opacity 0.5s ease";

    document.body.style.opacity = "1";
});
const params =
new URLSearchParams(window.location.search);

const storyId = params.get("id");

async function fetchStory(){

    try{

        const response = await fetch(
            `http://localhost:5000/api/stories/${storyId}`
        );

        const story = await response.json();

        displayStory(story);

    }catch(error){

        console.log(error);
    }
}

function displayStory(story){

    document.getElementById("story-title")
    .innerText = story.title;

    document.getElementById("story-era")
    .innerText = story.era;

    document.getElementById("story-content")
    .innerHTML = story.content;

    document.getElementById("story-image")
        .src =
        `assests/images/${story.image}`;
}

fetchStory();


window.addEventListener("click",()=>{

    const music =
    document.getElementById("bg-music");

    music.volume = 0.15;

    music.play();

},{
    once:true
});
function goBack(){

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href = "index.html";

    },500);
}