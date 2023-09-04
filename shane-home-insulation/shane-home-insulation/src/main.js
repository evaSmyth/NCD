'use strict'

//LEARN MORE BOX TOGGLING
const learnMoreBtn = document.querySelector('.learn-more-btn');
const learnMoreBox = document.querySelector('.learn-more-popup');
const main = document.querySelector('main');
const removeBtn = document.querySelector('.x-btn');


function toggleLearnMoreBox() {
  main.classList.toggle('blurred');
    learnMoreBox.classList.toggle('hidden');
};

const addLearnMoreBox = () => learnMoreBtn.addEventListener('click', toggleLearnMoreBox);
addLearnMoreBox();
const removeLearnMoreBox = () => removeBtn.addEventListener('click', toggleLearnMoreBox);
removeLearnMoreBox();

//SHOP
