/*
Задание №1. Напишите JS код, который выводит на странице html-документа 
всплывающее окно, которое спрашивает (у вводящего пользователя на экране) 
ввод вашего любимого фильма и если ввод неверен, 
то программа отправляет запрос alert “Попробуйте ещё раз”.
*/
let my_fav_movie = document.getElementsByClassName("my_fav_movie")
let user_answer = prompt("Угадайте мой любимый фильм")
if (user_answer != my_fav_movie.item(1)) {
    document.write(user_answer)
    document.write("<br>")
    document.write(my_fav_movie.item(0))
    alert("Попробуйте ещё раз")
}