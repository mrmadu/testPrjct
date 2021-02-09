/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

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
      movies = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('.add');

const showMovies = function(){
    movies.innerHTML = '';
    movieDB.movies.forEach((item) => {
        item.toUpperCase();
    });
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movies.innerHTML += 
        `<li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`;
    });
};

const newView = () => {
    advs.forEach(function(item) {
        item.remove();
    });
    
    genre.textContent = 'Драма';
    
    promoBG.style.backgroundImage = 'url("img/bg.jpg")';
};

newView();

showMovies();


form.addEventListener('submit', function(e){

    e.preventDefault();

    let newMovie = form.querySelector('.adding__input').value;

    if (newMovie) {
        if (newMovie.length > 21) {
            newMovie = `${newMovie.substring(0, 21)}...`;
        }
        if (document.querySelector('[type=checkbox]').checked) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(newMovie);
        showMovies();
        e.currentTarget.reset();
    }

});


document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
    });
});