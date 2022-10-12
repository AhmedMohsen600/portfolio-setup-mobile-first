const nav = document.querySelector('.nav-open');
const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.nav-open .link ');
const html = document.querySelector('html');
const workSection = document.querySelector('.works-section');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const holding = document.querySelector('.holding');
const headline = document.querySelector('.headline');
const modalTitle = document.querySelector('.headline h3');
const closeImg = document.querySelector('.headline img');
const modalTags = document.querySelector('.holding .tags-holder');
const modalImgHolder = document.querySelector('.modal-img');
const modalImg = document.querySelector('.modal-img img');
const modalInfo = document.querySelector('.modal-info');
const modalDesc = modalInfo.querySelector('p');
const modalSkills = document.querySelector('.modal-skills');
const children = modalSkills.querySelectorAll('li');
const submit = document.querySelector('.submit');
const emailInput = document.getElementById('email');
const resultMsg = document.querySelector('.msg');
const handelNavClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

burgerMenu.addEventListener('click', handelNavClick);

const handelLinkClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

links.forEach((lin) => {
  lin.addEventListener('click', handelLinkClick);
});

// data
const cardsData = [
  {
    className: ['tonic', 'order1'],
    imgSrcMob: './imgs/tonic2.png',
    imgSrcDesk: './imgs/order3.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Tonic',
    canopy: 'CANOPY',
    koko: 'girl',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    breif:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    className: ['tonic', 'order2'],
    imgSrcMob: './imgs/tonic3.png',
    imgSrcDesk: './imgs/order4.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Multi-Post Stories',
    canopy: 'CANOPY',
    koko: 'woman',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    breif:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    className: ['tonic', 'order3'],
    imgSrcMob: './imgs/woman.png',
    imgSrcDesk: './imgs/order1.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    koko: 'man',
    title: 'Tonic',
    canopy: 'CANOPY',
    desc: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    breif:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
  {
    className: ['tonic', 'order4'],
    imgSrcMob: './imgs/tonic4.png',
    imgSrcDesk: './imgs/order2.png',
    skills: ['html', 'css', 'javaScript'],
    modalSkills: new Set([
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstrap',
    ]),
    title: 'Multi-Post Stories',
    canopy: 'CANOPY',
    koko: 'boy',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    breif:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  },
];

// Creating cards dynamicly
cardsData.forEach((card) => {
  // holders
  const parent = document.createElement('div');
  const group = document.createElement('div');
  const image = document.createElement('div');
  const tagsHolder = document.createElement('div');
  const skills = document.createElement('ul');

  // children
  const mobileImg = document.createElement('img');
  const desktopImg = document.createElement('img');
  const button = document.createElement('button');

  // text
  const title = document.createElement('h2');
  const canopy = document.createElement('h3');
  const desc = document.createElement('p');

  // tags
  const dot = document.createElement('div');
  const dot2 = document.createElement('div');
  const tag = document.createElement('span');
  const tag2 = document.createElement('span');

  // set classes
  parent.classList.add(...card.className);
  group.classList.add('group');
  image.classList.add('image');
  mobileImg.classList.add('mobile-img');
  desktopImg.classList.add('desktop-img');
  tagsHolder.classList.add('tags-holder');
  skills.classList.add('skills');
  button.classList.add('view-project');
  canopy.classList.add('canopy');
  tag.classList.add('tag');
  tag2.classList.add('tag');
  dot2.classList.add('dot');
  dot.classList.add('dot');

  // set inner text values
  desc.innerText = card.desc;
  title.innerText = card.title;
  canopy.innerText = card.canopy;
  tag.innerText = 'Back End Dev';
  tag2.innerText = '2022';
  button.innerText = 'See project';

  // set img src
  mobileImg.src = card.imgSrcMob;
  desktopImg.src = card.imgSrcDesk;

  // append children
  image.append(mobileImg, desktopImg);
  tagsHolder.append(canopy, dot, tag, dot2, tag2);

  card.skills.forEach((skl) => {
    const skill = document.createElement('li');
    skill.classList.add('btn-skill');
    skill.innerText = skl;
    skills.append(skill);
  });

  group.append(title, tagsHolder, desc, skills, button);
  parent.append(image, group);
  workSection.appendChild(parent);

  // handel click event
  button.addEventListener('click', function () {
    modal.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // set classes
    modal.classList.add('modal');
    holding.classList.add('holding');
    headline.classList.add('headline');
    overlay.classList.add('active-modal');
    html.classList.add('modal-noscroll');

    // set text value
    modalTitle.textContent = card.title;
    modalImg.src = card.imgSrcDesk;
    modalDesc.textContent = card.breif;
    card.modalSkills.forEach((skl) => {
      const skill = document.createElement('li');
      skill.classList.add('btn-skill');
      skill.innerText = skl;
      modalSkills.append(skill);
    });
  });
});

overlay.addEventListener('click', function (e) {
  if (e.target.classList.contains('overlay')) {
    overlay.classList.remove('active-modal');
    html.classList.remove('modal-noscroll');
    document.location.reload();
  }
});

closeImg.addEventListener('click', function (e) {
  overlay.classList.remove('active-modal');
  html.classList.remove('modal-noscroll');
  document.location.reload();
});

// handel form validation
submit.addEventListener('click', function () {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    resultMsg.textContent = 'Email must be in lower case';
    resultMsg.style.color = '#000';
    return false;
  } else {
    resultMsg.style.color = 'rgb(255,255,255)';
    resultMsg.textContent = 'Valid email';
  }
});
