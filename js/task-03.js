const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector('.gallery');


const imagesEl = document.createElement('img'); 
const markap = ({url, alt}) => `<li><img src = "${url}" alt = "${alt}"></li>`;
const galaryAll = images.map((el) => markap(el));


galleryList.insertAdjacentHTML("afterbegin", galaryAll.join(''));
const addedClassGalary = document.querySelectorAll('li');

addedClassGalary.forEach((el) => el.classList.add("decoration"));
galleryList.style.cssText = `display: flex; gap: 40px; flex-direction: column; align-items: center;`;
