// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const year = document.querySelector("#year");
// const btn = document.querySelector(".btn");
// const bookList = document.querySelector("#book-list");

// btn.addEventListener("click",function(e){
//     e.preventDefault();
    
//     if(title.value == "" && author.value == "" && year.value == ""){
//         alert("please fill up the box");
//     }
//     else {
//         const newCreateRow = document.createElement('tr');
//         console.log(newCreateRow); // it is showing in my console tr 

//         //creating a new 'th' that means 
//         const newCreatetitle = document.createElement('th')
//         newCreatetitle.innerHTML = title.value;
//         newCreateRow.appendChild(newCreatetitle)
//         console.log(newCreatetitle);


//         const newCreateAuthor = document.createElement('th');
//         newCreateAuthor.innerHTML = author.value;
//         newCreateRow.appendChild(newCreateAuthor)
//         console.log(newCreateAuthor);

//         const newCreateYear = document.createElement('th');
//         newCreateYear.innerHTML = year.value;
//         newCreateRow.appendChild(newCreateYear)
//         console.log(newCreateYear);

//         bookList.appendChild(newCreateRow);
//     }
// });

// 2nd time practice 

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

// The addEventListener() method attaches an event handler to an element.

btn.addEventListener("click", function (e){
    e.preventDefault();
    console.log("hi");

    if( title.value == '' && author.value == '' && year.value == '' ){
        alert("need info");
    }
    else {
        // title + author+ year e info gulaer jonno  niche (booklist e aikhne ) new row create korbe 
        const createNewRow  = document.createElement("tr");
        console.log(createNewRow);

        // tilte
        const createNewTitle = document.createElement('th');
        createNewTitle.innerHTML = title.value; 
        createNewRow.appendChild(createNewTitle);
        console.log(createNewTitle);

        //Author
        const createNewAuthor = document.createElement('th');
        createNewAuthor.innerHTML = title.value; 
        createNewRow.appendChild(createNewAuthor);
        console.log(createNewAuthor);


        //Year
        
        const createNewYear = document.createElement('th');
        createNewYear.innerHTML = title.value; 
        createNewRow.appendChild(createNewYear);
        console.log(createNewYear);


        bookList.appendChild(createNewRow);

    }
});

