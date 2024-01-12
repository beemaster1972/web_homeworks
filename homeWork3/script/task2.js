/*
Задание №2*. Напишите JS код, который выводит на странице html-документа массив с элементами 'a', 'b', 'c'. 
Запишите вместо первого элемента слово, вместо второго - предложение, вместо третьего - новую букву. 
Массив должен состоять только из строк. Выведите итоговый массив в документ[через document.write(название массива)] 
или в консоль [через console.log(название массива)].
*/
let arr = ["a","b","c"]
let task2 = document.getElementById("task2")
task2.textContent = arr
let magic_button = document.getElementById("magic_button")
console.log(magic_button)
let magic_toggle = false
magic_button.addEventListener("click", function()
{
    if (magic_toggle){
        arr[0] = "a"
        arr[1] = "b"
        arr[2] = "c"
        task2.textContent = arr
    }
    else{
    arr[0] = "Lorem"
    arr[1] = " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    arr[2] = " L"
    task2.textContent = arr
    }
    magic_toggle = ! magic_toggle
})