
// Task 1 ============================================
/* Create a function t1 that writes to LS the key 5 with the value 11. Check what happens when the function is called again. Starts the function by button b-1. */

function t1() {
    localStorage.setItem('5', 11);
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* Create a function t2 that writes the array a2 = [7,6,5] to LS. Key a2. Check what happens when the function is called again. Starts the function by button b-2. */

let a2 = [7, 6, 5];

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2));
}

document.querySelector('.b-2').addEventListener('click', t2);


// Task 3 ============================================
/*  When pressing the button t3, output the saved array a2 from LS. Output to out-3 in the format key space value line break.  */

function t3() {
    let out = '';
    let b = JSON.parse(localStorage.getItem('a2'));
    for (let key in b) {
        out += key + ' ' + b[key] + '<br>';
    }
    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').addEventListener('click', t3);


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = { 'hello': 'world', 'hi': 'mahai' };

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let out = '';
    let b = JSON.parse(localStorage.getItem('a4'));
    for (let key in b) {
        out += key + ' ' + b[key] + '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];

function t7() {
    let i = document.querySelector('.i-7').value;
    if (localStorage.getItem('a7')) {
        a7 = JSON.parse(localStorage.getItem('a7'));
    }
    a7.push(i);
    localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    if (localStorage.getItem('a7')) {
        a7 = JSON.parse(localStorage.getItem('a7'));
    }
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-8').addEventListener('click', t8);