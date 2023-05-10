
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
/*  Create a function t4 that writes the array a4 = {hello: world, hi:mahai} to LS. Key a4. Check what happens when the function is called again. Starts the function by button b-4.*/

let a4 = { 'hello': 'world', 'hi': 'mahai' };

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4));
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*   When you press the b-5 button, output the stored array a4 from LS. Output to out-5 in the format key space value line break. */

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
/*  Create a function t6 that clears the entire LS. Button start b-6*/

function t6() {
    localStorage.clear();
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  Create input i-7 where the user can enter numbers and strings. Create array a7. When the user presses the b-7 button, the number should be added to the array. The array must be stored in LS with the key a7.*/

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
/*   Create a function t8 which, when run, removes the last element from a7. After that, the array is stored in LS with the key a7. Use array from previous job. */

function t8() {
    if (localStorage.getItem('a7')) {
        a7 = JSON.parse(localStorage.getItem('a7'));
    }
    a7.pop();
    localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-8').addEventListener('click', t8);