//                          Урок 6. Введение в DOM (Document Object Model)

//  1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// let superLink1 = document.getElementById('super_link');
// console.log(superLink1);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

// const cardLinks = document.querySelectorAll('.card-link');
// for (let i = 0; i < cardLinks.length; i++) {
//     cardLinks[i].textContent = 'ссылка';
// }

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

// let cardLinks1 = document.querySelectorAll('.card-body .card-link');
// console.log(cardLinks1);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

// let element1 = document.querySelector('[data-number="50"]');
// console.log(element1);

// 5. Выведите содержимое тега title в консоль.

// let title1 = document.querySelector('.card-title').innerText;
// console.log(title1);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

// let cardTitle1 = document.querySelector('.card-title');
// console.log(cardTitle1.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// let card1 = document.querySelector('.card');
// let p = document.createElement('p');
// p.innerText = 'Привет';
// card1.prepend(p);

// 8. Удалите тег h6 на странице.

// const h6 = document.querySelector('h6');
// h6.remove();