//Get Element By Id
console.log(document.getElementById('blog-title'));

//Get Elements By Class Name
console.log(document.getElementsByClassName('one'));

//Get Elements by Tag Name
console.log(document.getElementsByTagName('meta'));

//Get Element by CSS selector
//Query Selector
console.log(document.querySelector('.one'));
console.log(document.querySelector('#blog-title'));
//Query Selector All
console.log(document.querySelectorAll('[src]'));

//Content Handling
//Text Content
const element = document.getElementById('blog-title');
console.log(element.textContent)
element.textContent += ' - Hello World'
console.log(element.textContent)
//Inner Text
console.log(element.innerText)
element.innerText = 'Hello World'
console.log(element.innerText)
//Inner HTML
console.log(element.innerHTML)
element.innerHTML += '<strong>!!!</strong>'
console.log(element.innerHTML)

//Attributes handling
const header = document.querySelector('head')
header.setAttribute('id', 'header')
const headerId = document.getElementById('header')
console.log(headerId.getAttribute('id'))
header.setAttribute('class', 'my-header')
const headerClass = document.querySelector('.my-header')
console.log(headerClass.getAttribute('class'))

//Parent Node and Parent Element
const body = document.querySelector('body');
console.log(body.parentNode)
console.log(body.parentElement)

//Siblings
const title = document.querySelector('#blog-title')
console.log(title.nextElementSibling)
console.log(title.nextSibling)
const pOne = document.querySelector('p.one')
console.log(pOne.previousElementSibling)
console.log(pOne.previousSibling)

