"use strict";

document.addEventListener('DOMContentLoaded', function(){

    // Tabs

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


    // Timer

    const deadline = '2021-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
    

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // Либо вариант с toggle - но тогда назначить класс в верстке
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = '';
    }
    
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    
});