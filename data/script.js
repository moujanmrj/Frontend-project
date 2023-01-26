var grid_gap = "25px";
var grid_padding = "50px";
var grid_cell_padding = "20px";
var grid_cell_paddingBottom = "5px";

var lectures_gap = "50px";
var grid_cell_border_radius = "25px";

window.onload = function(){
    // Setting Initial Parameters of the Page===============================================
    document.getElementsByClassName("grid-container")[0].style.gap = grid_gap;
    document.getElementsByClassName("grid-container")[0].style.padding = grid_padding;

    let grid_items = document.getElementsByClassName("grid-container")[0].getElementsByTagName("div");
    for (let i=0; i < grid_items.length; i++) {
        grid_items[i].style.padding = grid_cell_padding;
    }



    document.getElementsByClassName("lectures")[0].style.gap = lectures_gap;
    document.getElementsByClassName("lectures")[0].style.padding = grid_padding;

    let lecture_items = document.getElementsByClassName("lectures")[0].getElementsByTagName("div");
    for (let i=0; i < lecture_items.length; i++) {
        lecture_items[i].style.padding = grid_cell_padding;
        lecture_items[i].style.paddingBottom = grid_cell_paddingBottom;
        lecture_items[i].style.borderRadius = grid_cell_border_radius;
    }

    document.getElementsByClassName("related_books")[0].style.gap = lectures_gap;

    let related_books_items = document.getElementsByClassName("related_books")[0].getElementsByTagName("div");
    for (let i=0; i < related_books_items.length; i++) {
        related_books_items[i].style.borderRadius = grid_cell_border_radius;
        related_books_items[i].style.padding = "0px";
    }

    var button = document.createElement("Button");
    button.innerHTML = "&#x2630;";
    button.style = "top:50px;right:50px;position:fixed;z-index: 9999;" +
                    "border-radius: 100px; padding:15px; border:none;" +
                    "background-color: white; "
    document.body.appendChild(button);

    button.onclick = function () {
        var modal = document.getElementById("menu");
        modal.style.display = "block";
    }

};
var temp1 = "";
var temp2 = "";
function mouse_on_related(price, key) {
    temp1 = document.getElementById(price).innerHTML;
    temp2 = document.getElementById(key).innerHTML;

    document.getElementById(price).innerHTML = "price = 12.81$";
    document.getElementById(key).innerHTML = "OPEN";

    document.getElementById(price).style.rotate = "y  180deg";
    document.getElementById(key).style.rotate = "y 180deg";


    document.getElementById(key).style.border = "1px solid black";

}
function mouse_off_related(price, key) {
    document.getElementById(price).innerHTML = temp1;
    document.getElementById(key).innerHTML = temp2;

    document.getElementById(price).style.rotate = "0deg";
    document.getElementById(key).style.rotate = "0deg";

    document.getElementById(key).style.border = "none";
}



function open_popup(key){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    if (key == "js_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        let dscr = document.getElementById("book_dscr")
        img.src = "data/img/Book1-1.jpg";
        buy.href = "https://www.amazon.com/JavaScript-Definitive-Guide-Activate-Guides/dp/0596805527";
        dscr.innerHTML = "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.\n" +
            "\n" +
            "This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.";

    } else if (key == "react_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        img.src = "data/img/Book2-1.jpg";
        buy.href = "https://www.amazon.com/Road-learn-React-pragmatic-React-js-ebook/dp/B077HJFCQX";
        let dscr = document.getElementById("book_dscr")
        dscr.innerHTML = "In \"The Road to React\" you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature. However, there is more than only the fundamentals: The book dives into related topics (e.g. React with TypeScript, Testing, Performance Optimizations) and advanced feature implementations like client- and server-side searching. At the end of the book, you will have a fully working deployed React application.";

    } else if ( key == "go_key") {
        let img = document.getElementById("modal_img")
        let buy = document.getElementById("buyLink")
        img.src = "data/img/Book3-1.jpg";
        buy.href = "https://www.amazon.com/Introducing-Go-Reliable-Scalable-Programs/dp/1491941952";
        let dscr = document.getElementById("book_dscr")
        dscr.innerHTML = "Livraison GRATUITE (0,01€ pour les livres) en point retrait (selon éligibilité des articles). Détails\n" +
            "Perfect for beginners familiar with programming basics, this hands-on guide provides an easy introduction to Go, the general-purpose programming language from Google. Author Caleb Doxsey covers the languageâ s core features with step-by-step instructions and exercises in each chapter to help you practice what you learn.\n" +
            "\n" +
            "Go is a general-purpose programming language with a clean syntax and advanced features, including concurrency. This book provides the one-on-one support you need to get started with the language, with short, easily digestible chapters that build on one another. By the time you finish this book, not only will you be able to write real Go programs, you'll be ready to tackle advanced techniques.";
    }
}

// var span = document.getElementsByClassName("close")[0];

function spanClick(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function spanClick2(){
    var modal = document.getElementById("menu");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("menu");
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}