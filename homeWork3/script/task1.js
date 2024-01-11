/*
Задание №1. Напишите JS код, который выводит на странице html-документа 
всплывающее окно, которое спрашивает (у вводящего пользователя на экране) 
ввод вашего любимого фильма и если ввод неверен, 
то программа отправляет запрос alert “Попробуйте ещё раз”.
*/
// let task1 = document.getElementById("task1")
// console.log(task1)
// let elements = task1.getElementsByClassName("movie")
// console.log(elements)
// let my_fav_movie = [].map.call(elements, element => element.textContent)
// console.log(my_fav_movie)
var movieFav = document.getElementById("task1").textContent
console.log(movieFav)
let user_answer = prompt("Угадайте мой любимый фильм")
if (user_answer.toLocaleLowerCase() === movieFav.toLocaleLowerCase()) alert("Да ты угада!!!")
else {
     document.write(user_answer)
     document.write("<br>")
     document.write(movieFav)
     alert("Попробуйте ещё раз")
}