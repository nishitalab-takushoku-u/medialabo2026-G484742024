function changeDom() {

    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');

    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    let k = document.querySelector('ul#kassen');
    k.remove();

    let ul = document.createElement('ul');

    let li = document.createElement('li');
    li.textContent = '赤';
    ul.insertAdjacentElement('beforeend', li);

    li = document.createElement('li');
    li.textContent = '緑';
    ul.insertAdjacentElement('beforeend', li);

    li = document.createElement('li');
    li.textContent = '青';
    ul.insertAdjacentElement('beforeend', li);

    let primary = document.querySelector('p#primary');
    primary.insertAdjacentElement('afterend', ul);
}
let button = document.querySelector('button#henkou');
button.addEventListener('click', changeDom);