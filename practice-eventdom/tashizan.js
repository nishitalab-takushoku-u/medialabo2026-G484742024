function greeting() {
    let p1 = document.querySelector('input[name="left"]');
    let p2 = document.querySelector('input[name="right"]');
    let left = p1.value;
    let right = p2.value;
    let a = Number(left);
    let b = Number(right);
    let sum = a + b;
    let s = document.querySelector('span#answer');
    s.textContent = sum;
}
let b = document.querySelector('button#calc');
b.addEventListener('click', greeting);