window.addEventListener("scroll",()=>{

    const scroll = window.pageYOffset;

    document.querySelector(".hero").style.backgroundPositionY =

    scroll * 0.5 + "px";
});

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

let particlesArray = [];

class Particle{

    constructor(){

        this.x =
        Math.random() * canvas.width;

        this.y =
        Math.random() * canvas.height;

        this.size =
        Math.random() * 4 + 1;

        this.speedY =
        Math.random() * 1 + 0.3;

        this.opacity =
        Math.random();
    }

    update(){

        this.y -= this.speedY;

        if(this.y < 0){

            this.y = canvas.height;

            this.x =
            Math.random() * canvas.width;
        }
    }

    draw(){

        ctx.beginPath();

        ctx.fillStyle =

        `rgba(247,200,115,${this.opacity})`;

        ctx.arc(

            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}

function initParticles(){

    particlesArray = [];

    for(let i=0;i<150;i++){

        particlesArray.push(
            new Particle()
        );
    }
}

function animateParticles(){

    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height
    );

    particlesArray.forEach((particle)=>{

        particle.update();

        particle.draw();
    });

    requestAnimationFrame(
        animateParticles
    );
}

initParticles();

animateParticles();

function initScrollAnimations(){

    const cards =
    document.querySelectorAll(".story-card");

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");
            }
        });

    });

    cards.forEach((card)=>{

        card.classList.add("hidden");

        observer.observe(card);
    });
}