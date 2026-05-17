async function fetchStories() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/stories"
        );

        const stories = await response.json();

        console.log(stories);

        displayStories(stories);

    } catch (error) {

        console.log(error);
    }
}

function displayStories(stories) {
    initScrollAnimations();
    const ramayanaContainer =
    document.getElementById("ramayana-container");

    const mahabharataContainer =
    document.getElementById("mahabharata-container");

    const historyContainer =
    document.getElementById("history-container");

    console.log(ramayanaContainer);
    console.log(mahabharataContainer);
    console.log(historyContainer);

    stories.forEach((story) => {

        const card = createCard(story);

        const category =
        story.category.toLowerCase().trim();

        console.log(category);

        if (category.includes("ram")) {

            ramayanaContainer.appendChild(card);
        }

        else if (category.includes("maha")) {

            mahabharataContainer.appendChild(card);
        }

        else if (category.includes("hist")) {

            historyContainer.appendChild(card);
        }
    });
}

function createCard(story) {

    const div = document.createElement("div");

    div.classList.add("story-card");
    div.addEventListener("click",()=>{

        document.body.classList.add("fade-out");

        setTimeout(()=>{

            window.location.href =
            `story.html?id=${story._id}`;

        },500);
});
    div.innerHTML = `

        <img 
        src="assests/images/${story.image}"
        class="story-image"
        >

        <div class="story-content">

            <h3>${story.title}</h3>

            <p>${story.content
        .replace(/<[^>]*>/g, '')
        .substring(0,120)}...</p>

        </div>
    `;

    return div;
}

fetchStories();