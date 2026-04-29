const courses = [
  {
    number: "01",
    title: "Unbound Framework",
    description: "A trauma-informed framework focused on safety, identity rebuilding, empowerment, and sustainable freedom.",
    image: "Media/course1-unbound-framework.webp"
  },
  {
    number: "02",
    title: "Makeup Artistry",
    description: "Master the art of makeup application and transform your passion into a skill that empowers others.",
    image: "Media/course2-makeup-artistry.webp"
  },
  {
    number: "03",
    title: "Hairstyling",
    description: "Learn essential hairstyling skills in cutting, styling and finishing, and start your journey in the beauty and wellness industry.",
    image: "Media/course3-hairstyling.webp"
  },
  {
    number: "04",
    title: "Nail Technology",
    description: "Learn professional nail care, design, and application techniques to build a career in the beauty industry.",
    image: "Media/course4-nail-technology.webp"
  }
];



const theCoursesSection = document.querySelector(".thecourses");
const courseNumber = document.querySelector(".course h2 span");
const courseTitle = document.querySelector(".course h3");
const courseDescription = document.querySelector(".course p");
const previousButton = document.querySelector(".previous-course");
const nextButton = document.querySelector(".next-course");
const indicatorButtons = document.querySelectorAll(".which-course button");



let currentCourseIndex = 0;



function showCourse(index) {
    const course = courses[index];

    courseNumber.textContent = course.number;
    courseTitle.textContent = course.title;
    courseDescription.textContent = course.description;

    theCoursesSection.style.backgroundImage = `
        linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25)),
        url("${course.image}")
    `;

    indicatorButtons.forEach((button, buttonIndex) => {
        button.classList.toggle("active", buttonIndex === index);
    });
}



nextButton.addEventListener("click", () => {
  currentCourseIndex++;

  if (currentCourseIndex >= courses.length) {
    currentCourseIndex = 0;
  }

  showCourse(currentCourseIndex);
});



previousButton.addEventListener("click", () => {
  currentCourseIndex--;

  if (currentCourseIndex < 0) {
    currentCourseIndex = courses.length - 1;
  }

  showCourse(currentCourseIndex);
});



indicatorButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentCourseIndex = index;
    showCourse(currentCourseIndex);
  });
});



showCourse(currentCourseIndex);






const volunteers = [
    {
        name: "Charlotte",
        role: "Workshop Assistant",
        image: "Media/volunteer1.webp",
        alt: "Brown hair young lady volunteer"
    },
    {
        name: "Samantha",
        role: "Workshop Assistant",
        image: "Media/volunteer2.webp",
        alt: "Asian young lady volunteer"
    },
    {
        name: "Robyn",
        role: "Workshop Assistant",
        image: "Media/volunteer3.webp",
        alt: "Young lady volunteer with glasses"
    }
];

const volunteerImage = document.querySelector(".volunteer img");
const volunteerName = document.querySelector(".volunteer h3");
const volunteerRole = document.querySelector(".volunteer p");
const previousVolunteerButton = document.querySelector(".previous-volunteer");
const nextVolunteerButton = document.querySelector(".next-volunteer");
const volunteerIndicatorsWrap = document.querySelector(".which-volunteer");

let currentVolunteerIndex = 0;

volunteerIndicatorsWrap.innerHTML = volunteers
    .map((_, index) => `<button aria-label="volunteer ${index + 1}"></button>`)
    .join("");

const volunteerIndicatorButtons = document.querySelectorAll(".which-volunteer button");

function showVolunteer(index) {
    const volunteer = volunteers[index];

    volunteerImage.src = volunteer.image;
    volunteerImage.alt = volunteer.alt;
    volunteerName.textContent = volunteer.name;
    volunteerRole.textContent = volunteer.role;

    volunteerIndicatorButtons.forEach((button, buttonIndex) => {
        button.classList.toggle("active", buttonIndex === index);
    });
}

nextVolunteerButton.addEventListener("click", () => {
    currentVolunteerIndex++;

    if (currentVolunteerIndex >= volunteers.length) {
        currentVolunteerIndex = 0;
    }

    showVolunteer(currentVolunteerIndex);
});

previousVolunteerButton.addEventListener("click", () => {
    currentVolunteerIndex--;

    if (currentVolunteerIndex < 0) {
        currentVolunteerIndex = volunteers.length - 1;
    }

    showVolunteer(currentVolunteerIndex);
});

volunteerIndicatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        currentVolunteerIndex = index;
        showVolunteer(currentVolunteerIndex);
    });
});

showVolunteer(currentVolunteerIndex);





const partnerImages = [
  { src: "Media/partner1.webp", alt: "Manchester City Council logo", width: 95, height: 95 },
  { src: "Media/partner2.webp", alt: "Manchester Community Central logo", width: 95, height: 95 },
  { src: "Media/partner3.webp", alt: "The University of Manchester logo", width: 95, height: 95 },
  { src: "Media/partner4.webp", alt: "Students' Union logo", width: 95, height: 95 },
  { src: "Media/partner5.webp", alt: "Manchester Metropolitan University logo", width: 95, height: 95 },
  { src: "Media/partner6.webp", alt: "GM Business Growth Hub logo", width: 95, height: 95 },
  { src: "Media/partner7.webp", alt: "Medaille Trust logo", width: 95, height: 95 },
  { src: "Media/partner8.webp", alt: "Avensis Support Limited logo", width: 95, height: 95 },
  { src: "Media/partner9.webp", alt: "Riverside logo", width: 95, height: 95 },
  { src: "Media/partner10.webp", alt: "Cracking Good Food C.I.C logo", width: 95, height: 95 },
  { src: "Media/partner11.webp", alt: "BMS Wellbeing C.I.C logo", width: 95, height: 95 },
  { src: "Media/partner12.webp", alt: "Alchemy Arts Limited logo", width: 95, height: 95 }
];

const ourPartners = document.querySelector(".our-partners");
const previousPartnersBtn = document.querySelector(".previous-partners");
const nextPartnersBtn = document.querySelector(".next-partners");
const whichPartnersBtns = document.querySelectorAll(".which-partners button");

const partnersPerSlide = 6;
let currentPartnersSlide = 0;

function renderPartners() {
  const start = currentPartnersSlide * partnersPerSlide;
  const end = start + partnersPerSlide;
  const currentSet = partnerImages.slice(start, end);

  ourPartners.textContent = "";

  currentSet.forEach((partner) => {
    const img = document.createElement("img");
    img.src = partner.src;
    img.alt = partner.alt;
    img.width = partner.width;
    img.height = partner.height;
    img.loading = "lazy";
    img.decoding = "async";
    ourPartners.appendChild(img);
  });

  whichPartnersBtns.forEach((button, index) => {
    button.classList.toggle("active", index === currentPartnersSlide);
  });
}

previousPartnersBtn.addEventListener("click", () => {
  currentPartnersSlide--;
  if (currentPartnersSlide < 0) {
    currentPartnersSlide = Math.ceil(partnerImages.length / partnersPerSlide) - 1;
  }
  renderPartners();
});

nextPartnersBtn.addEventListener("click", () => {
  currentPartnersSlide++;
  if (currentPartnersSlide >= Math.ceil(partnerImages.length / partnersPerSlide)) {
    currentPartnersSlide = 0;
  }
  renderPartners();
});

whichPartnersBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentPartnersSlide = index;
    renderPartners();
  });
});

renderPartners();





const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});