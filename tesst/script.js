const reviews = [
    {
        id: 1,
        name: "@darryncodes",
        job: "Front-end developer",
        img: "images/Haniah2.jpg",
        text:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."'
    },
    {
        id: 2,
        name: "@annajohnson",
        job: "UI Designer",
        img: "images/Dalarno3.jpg",
        text:
            '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."'
    },
    {
        id: 3,
        name: "@peterjones",
        job: "Intern",
        img: "images/Zharne.jpg",
        text:
            '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
    },
    {
        id: 4,
        name: "@peterjones",
        job: "Intern",
        img: "images/yaasien.jpg",
        text:
            '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
    },
    {
        id: 5,
        name: "@peterjones",
        job: "Intern",
        img: "images/Leigh_ann3.jpg",
        text:
            '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
    },
    {
        id: 6,
        name: "@billanderson",
        job: "UX Designer",
        img: "images/alex.jpg",
        text:
            '"Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."'
    }
];

const img = document.getElementById("img");
const testimonial = document.getElementById("testimonial");
const name = document.getElementById("name");
const job = document.getElementById("job");

const leftBtn = document.querySelector(".carousel__btn--left");
const rightBtn = document.querySelector(".carousel__btn--right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    testimonial.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
