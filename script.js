const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const popContainer = document.getElementById('pop-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuBar.classList.toggle('show-navbar');
});
document.querySelectorAll('.head-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menuBar.classList.remove('show-navbar');
}));

const projectsCards = [
  {
    id: '0',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standards',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '1',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '2',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '3',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '4',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
  {
    id: '5',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    cardSkills: ['html', 'bootstrap', 'Ruby'],
  },
];

const projectsContainer = document.getElementById('frame-sub');

projectsCards.forEach((projects, index) => {
  const card = `
  <div class="card-works card1">
  <div class="mask">
    <div class="img-placeholder a">
      <div class="div">
        <div class="right-works">
          <h2 class="pro">${projects.name}</h2>
          <h6 class="sub1">${projects.description}</h6>
          <ul class="tags">
          <li>${projects.cardSkills[0]}</li>
          <li>${projects.cardSkills[1]}</li>
          <li>${projects.cardSkills[2]}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="but">
        <a href="#" class="see1" id="${index}">See Project</a>
      </div>
    </div>
  </div>
`;
  projectsContainer.innerHTML += card;
});
function ClosePopUp() {
  popContainer.style.display = 'none';
}
const dataCards = [
  {
    id: 0,
    // url: '../../images/Snapshoot Portfolio.png',
    IMGURL: './imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
  {
    id: 1,
    IMGURL: './imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
  {
    id: 2,
    IMGURL: './imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
  {
    id: 3,
    IMGURL: './imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
  {
    id: 4,
    IMGURL: './imgnew/ImgPlaceholder(2).png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    LinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
  {
    id: 5,
    IMGURL: './imgnew/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    titlesmall: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    tecnologies: {
      tech1: 'html',
      tech2: 'Bootstrap',
      tech3: 'Ruby on rails',
    },
    LinkToLive: 'https://tessyrich.github.io/Portfolio-Setup-and-mobile-first/',
    ILinkToSource: 'https://github.com/Tessyrich/Portfolio-Setup-and-mobile-first',
  },
];

const arrayOnclickBtn = document.querySelectorAll('.see1');

const renderCards = (indx) => {
  dataCards.map((card, cardIndx) => {
    if (cardIndx === indx) {
      document.querySelector('.pop-up').innerHTML = `
      <div class="mult">
      <div class="ham">
        <h2 class="post post-small">${card.titlesmall}</h2>
        <h2 class="post post-big">${card.title}</h2>
        <span class="close-pop" id="close-pop" onclick='ClosePopUp()'>&times;</span>
      </div>
      <ul class="tag-main">
        <li class="tag2"><a href="#">${card.tecnologies.tech1}</a></li>
        <li class="tag3"><a href="#">${card.tecnologies.tech2}</a></li>
        <li class="tag4"><a href="#">${card.tecnologies.tech3}</a></li>
      </ul>
    </div>
    <div class="details-main">
      <div class="details-img"><img src=${card.IMGURL} class="det-img"></div>
      <div class="details-text">
        <div class="text">
          <p class="support sub-details">${card.description}</p>
        </div>
        <div class="but-details">
          <section class="buttom buttom-first">
            <a href=${card.LinkToLive} class="see">See live</a>
            <img src="./images/icon-see live.png" alt="image icon see live">
          </section>
          <section class="buttom buttom-sec">
            <a href=${card.LinkToSource} class="see">See source</a>
            <img src="./images/Icon -GitHub.png" alt=" image icon Twitter">
          </section>
        </div>
      </div>
      </div>
      `;
    }
    return dataCards;
  });
};
for (let i = 0; i < arrayOnclickBtn.length; i += 1) {
  arrayOnclickBtn[i].addEventListener('click', () => {
    renderCards(i);
    ClosePopUp();
    popContainer.style.display = 'block';
  });
}
