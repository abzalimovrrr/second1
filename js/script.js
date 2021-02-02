console.log(2);
console.log(1);
let namber=5;
let namber1=9;
let namber2=7;
let namber3=8;

console.log(namber);
namber=10;
console.log(namber);
namber=namber+namber1-namber2;
console.log(namber);
let obj = {
    a:"cvbncvbn",
    b:"hjkghjk",
    c:"cvbn"
}; 
console.log(obj.b);
let arr = ['aa','ss','dd','ffff','gggg','hhhh','jjj',{aaa:"cgdfg",b:"dfgdfg"}]; 
console.log(arr[7]);
const asa = prompt("ВАСЯ","dfgsdfgsdfgsdfgsdfgsdfg");
console.log(asa);
const answe = prompt("ВАСЯ","dfgsdfgsdfgsdfgsdfgsdfg");
const answer=[];
answer[0]=prompt("Имя","");
answer[1]=prompt("Фамилия","");
answer[2]=prompt("Отчество","");
console.log(answer[1]);
console.log(answer[0]);
console.log(answer[2]);
document.write(answer);
/* Document.write(answer[0]);
Document.write(answer[2]);
console.log(answer); */
console.log(answer[2]+`Петя Вася${obj.b}DFDF`);

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'+++

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
            /* числовое значение  */
const numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB={/* свойства  */
    count:numberOfFilms,
    movies:{} /* пустой объект */
    actors:{}/* пустой объект */
    genres:[]/* пустой массив */
    privat:false/* значение  */
};/* объект */
const a=prompt('Один из последних просмотренных фильмов?',''),
      b=prompt('На сколько оцените его?',''),
      c=prompt('Один из последних просмотренных фильмов?',''),
      d=prompt('На сколько оцените его?','');
   /* запись свойства в объект объект */
      numberOfFilms.movies[a]=b;
      numberOfFilms.movies[c]=d;

      console.log(numberOfFilms);