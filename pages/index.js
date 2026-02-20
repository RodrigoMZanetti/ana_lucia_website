import init from "../components/form.js";
import { openPopup, closePopup } from "../utils/close-popup.js";

///// OBJECTS
///HERO
const photoOfAna = {
  description:
    "Ana Lucia is a civil engineer with over 42 years of experience. She began her career with a three-year internship and later opened her own office. She has worked with inspections, construction supervision, property legalization, and Fire Department approvals. Today, she specializes in business permits and safety compliance projects.She is known for her honesty, dedication, clear communication, and delivering projects on schedule.",
};

///PROJECTS
const projects = [
  {
    description:
      "In 2024, I led the interior structural design project for a growing commercial company seeking a modern and functional workspace. I developed detailed technical drawings and optimized the spatial layout while ensuring full compliance with safety standards. The redesign improved space utilization by 15 percent and enhanced natural lighting integration. The final result combined structural precision with contemporary interior design principles.",
  },
  {
    description:
      "In 2023, I supervised the underground pipeline installation for a municipal water infrastructure project. The objective was to modernize the drainage system and improve long-term water distribution efficiency. I coordinated structural planning, safety compliance, and on-site technical execution to ensure precise alignment and durability. The project was completed ahead of schedule and significantly enhanced the city’s infrastructure reliability.",
  },
  {
    description:
      "In 2024, I led the structural foundation development for a large-scale industrial facility renovation. The project required detailed load analysis, reinforced concrete planning, and strict adherence to safety regulations. I coordinated multidisciplinary teams to ensure precision in excavation, formwork, and structural alignment. The result was a stable, high-performance foundation prepared to support advanced industrial operations.",
  },
  {
    description:
      "In 2024, I designed the structural and architectural layout for a contemporary residential project focused on sustainability and comfort. The concept integrated natural lighting, optimized spatial flow, and environmentally conscious materials. I collaborated closely with landscape designers to harmonize the structure with the surrounding greenery. The final result was a modern home that balances aesthetics, functionality, and long-term durability.",
  },
  {
    description:
      "In 2024, I collaborated with a multidisciplinary team to develop the technical planning for a commercial renovation project. We worked closely on detailed blueprints, ensuring structural accuracy and optimized spatial functionality. My role involved coordinating design adjustments and verifying compliance with engineering standards. The project was successfully executed through strong communication, precision, and strategic planning.",
  },
  {
    description:
      "In 2023, I supervised the structural execution of a highway overpass construction project aimed at improving urban mobility. The work involved reinforced concrete foundations, load distribution analysis, and strict adherence to safety and environmental standards. I coordinated field operations to ensure precision during excavation and structural assembly. The project strengthened regional connectivity and enhanced long-term transportation efficiency.",
  },
];

/////DOM
const anaPhoto = document.querySelector(".hero__image");
const projectsGrid = document.querySelector(".projects__grid");
const allProjectsImages = projectsGrid.querySelectorAll(
  ".projects__grid_image",
);
const storeTrack = document.querySelector(".store__track");
const imagesTrack = storeTrack.querySelectorAll(".store__image");

/////POPUPs
const popupContainer = document.querySelector(".popup");
const popupImage = document.querySelector("#image-popup");
const imageContainer = popupImage.querySelector(".popup__image");
const closeImageButton = popupImage.querySelector(".popup-close");
const popupImageText = popupImage.querySelector(".popup__text");

init();

/////EVENT - OPEN ANA'S PHOTO
anaPhoto.addEventListener("click", () => {
  imageContainer.src = anaPhoto.src;
  popupImageText.textContent = photoOfAna["description"];
  openPopup(popupImage);
});

/////EVENT - OPEN PROJECTS'S PHOTO
allProjectsImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    imageContainer.src = image.src;
    popupImageText.textContent = projects[index]["description"];
    openPopup(popupImage);
  });
});

/////CLOSE ALL POPUPS IMAGE
closeImageButton.addEventListener("click", () => {
  imageContainer.src = "";
  popupImageText.textContent = "";
  closePopup(popupImage);
});

popupContainer.addEventListener("click", (evt) => {
  if (evt.target === popupContainer) {
    closePopup(popupImage);
  }
});

/////STORE TRACK
let currentIndex = 0;
const visibleItems = 3;
const totalItems = imagesTrack.length;
const maxIndex = totalItems - visibleItems;
const itemWidth = imagesTrack[0].getBoundingClientRect().width;
const gapSize = parseFloat(getComputedStyle(storeTrack).gap);
const stepSize = gapSize + itemWidth;
