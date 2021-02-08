/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
    ]
};

const advs = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector('.promo__bg'),
      genre = promoBG.querySelector('.promo__genre'),
      movies = document.querySelector('.promo__interactive-list');

advs.forEach(function(item) {
    item.remove();
});

genre.textContent = 'Драма';

promoBG.style.backgroundImage = 'url("img/bg.jpg")';

movies.innerHTML = '';

movieDB.movies.sort();

console.log(movieDB.movies);

movieDB.movies.forEach((film, i) => {
    movies.innerHTML += 
    `<li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
});