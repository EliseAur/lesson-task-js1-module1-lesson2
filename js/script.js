// JavaScript 1 - Module 1
// Lesson Task 2 Questions

// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.

//FASIT
// const firstHeading = document.querySelector("h3");
// firstHeading.innerHTML = "Hello";

const headingOne = document.querySelector("h3");
headingOne.innerHTML = "Hello";
headingOne.style.color = "red";
console.log(headingOne);

console.log("hello");

// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.

const headingTwo = document.querySelectorAll("h4");

for (let i = 0; i < headingTwo.length; i++) {
    headingTwo[i].style.marginBottom = "-20px";
}

// Question 3
// Set the background colour of the second h4 element to red.

//FASIT
headingTwo[1].style.backgroundColor = "red";

//Mitt svar
// const HeadingTwoTwo = document.querySelector(".two");
// HeadingTwoTwo.style.backgroundColor = "red";

// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.

// const paragraphs = document.querySelectorAll(".section");

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[0].style.fontSize = "24px";
//     paragraphs[0].style.color = "blue";
// }

//or

const paragraphOne = document.querySelector("p.one");
paragraphOne.style.fontSize = "24px";
paragraphOne.style.color = "blue";

// Question 5
// Add span tags around the content of the third paragraph element on the page.

const paragraphThree = document.querySelector("p.three");
paragraphThree.innerHTML = "<span>" + paragraphThree.innerHTML + "</span>";

// or
// thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;

// Question 6
// Add a new paragraph to the div with a class of content. Add the paragraph after the others.

const contentContainer = document.querySelector(".content");
contentContainer.innerHTML = contentContainer.innerHTML + "<p>This is new content</p>";

// Question 7
// Add a new class called content-item to each paragraph in the div with a class of content.

const newClass = document.querySelectorAll(".content p");

for (let i = 0; i < newClass.length; i++) {
    newClass[i].classList.add("content-item");
    console.log(newClass[i].classList);
}

// Question 8
// Select the ul element on the page by its id and add a new list item to the beginning of the list.

const list = document.querySelector("#services");

const newListItem = "New list item";

//list.innerHTML = `<li>${newListItem}</li>` + list.innerHTML;

//or

list.innerHTML = "<li>" + newListItem + "</li>" + list.innerHTML;

//or FASIT

// const list = document.querySelector("#services");
// list.innerHTML = "<li>New item</li>" + list.innerHTML;

// Question 9
// Programmatically remove the class from the ul element.

list.classList.remove("service-list");

// Question 10
// Hide the element with the id of hide.

const hiddenText = document.querySelector("#hide");

hiddenText.style.display = "none";
