"use strict";

document.addEventListener('DOMContentLoaded', function(){

    const tabLink = document.querySelectorAll('.tabheader__item'),
          tabContnent = document.querySelectorAll('.tabcontent'),
          linksWrapper = document.querySelector('.tabheader__items');

    function hideContent(){
        tabContnent.forEach(item => {
            item.style.display = 'none';
        });
        tabLink.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showContnent(i = 0){
        tabContnent[i].style.display = 'block';
        tabLink[i].classList.add('tabheader__item_active');
    }

    hideContent();
    showContnent();

    linksWrapper.addEventListener('click', function(e){
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabLink.forEach((item, i) => {
                if(e.target == item) {
                    hideContent();
                    showContnent(i);
                }
            });
        }
    });
    
});