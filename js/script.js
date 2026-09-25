
// // const username = document.querySelector("#username");

// // console.log(username.value);



// // // image access = getAttribute 

// // const image = document.getElementById("photo");

// // console.log(image.getAttribute("src"));


// // // change the attribute = setAttribute  


// // image.setAttribute("src" , "image2.png");
// // image.setAttribute("alt" , "new image");


// // // removeAttribute => remove any attribute

// // image.removeAttribute("src");


// // // hasAttribute = checking the attribute 

// // console.log(image.hasAttribute("src"));
// // console.log(image.hasAttribute("alt"));



// // // const link = document.getElementsByTagName("a");

// // // console.log(link);


// // const link = document.getElementById("google");

// // console.log(link.getAttribute("href"));


// // link.setAttribute("href" , "https://youtube.com");


// // link.textContent = "visit you tube";



// // // createElement => create a new HTML element 





// // // appendChild => adds an element as the last child of another element  => this is for single element 
// // // append = add element at the end 

// // // append => add an element in a container , but multiple 


// // const container = document.getElementById("container");

// // const para = document.createElement("p");

// // para.textContent = "hello students";


// // container.appendChild(para);



// // const heading = document.createElement("h2");

// // heading.textContent= "hello heading";

// // const paragraph = document.createElement("p");
// // paragraph.textContent = "learning js from start";

// // container.append(heading , paragraph);



// // // prepend => add the Element at the start 

// // const second = document.getElementById("second");

// // const first = document.createElement("p");

// // first.textContent= "first";


// // second.prepend(first);


// // before => add an Element before another element 


// // after = add an element after another element 


// const products = [
//     {
//         name : "laptop",
//         price : 50000,
//         color : "silver"
//     },
//     {
//         name : "watch" ,
//         price: 3000,
//         color : "white",
//     },
//     {
//         name : "shirt",
//         price : 2000,
//         color:"black",
//     },
//      {
//         name : "jeans",
//         price : 3000,
//         color:"blue",
//     }
// ]

// const container = document.querySelector("#products");



// products.forEach(function(product) {
//     const card = document.createElement("div");

//     const all = document.getElementById("all");
//     all.textContent = "delete all Product"


//     const title = document.createElement("h2");
//     title.textContent = product.name;

//     const price = document.createElement("p");
//     price.textContent = `Price : $ ${product.price}`;

//     const color = document.createElement("p");
//     color.textContent = `Color : ${product.color}`;

//     const button = document.createElement("button");
//     button.textContent= "Buy Now";

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent= "Delete";


//     card.append(title , price , color ,  button , deleteBtn);


//     container.append( card);

//     deleteBtn.addEventListener("click" , function() {
//         card.remove();
//     })

//     all.addEventListener("click" , function() {
//         container.remove();
//     })
// })


// const msg = document.getElementById("msg");

// msg.remove();



// const para = document.createElement("p");

// para.textContent= "hello";
// container.append(para);

// para.remove();


// // removeChild() => call to parent , and tell it which child should be removed 




// const main = document.querySelector("#main");

// const child = document.querySelector("#child");

// main.removeChild(child);


// // Event => an event means something happens on the webpage by user 


// // addEventListener => action perform on particular event 


// // variablename.addEventListener("click" , function() {
// //     main code 
// // })


// const btn = document.getElementById("btn");

// btn.addEventListener("click" , function() {
//     console.log("btn is clicked");
//     alert("btn is click");
// })


// const first = document.getElementById("first");
// const btn1 = document.getElementById("btn1");

// btn1.addEventListener("click" , function() {
//     first.textContent= "welcome to js";
//     first.style.color = "green";
// })





// first.style.color = "red";
// first.style.background = "gray";
// first.style.border= "2px solid black";



// // classlist => add , remove , toogle 


// const title = document.getElementById("title");
// const btn = document.getElementById("btn");
// const remove = document.getElementById("remove");
// const toogle = document.getElementById("toggle")

// btn.addEventListener("click" , function() {
//     title.classList.add("active");
// });


// remove.addEventListener("click" , function() {
//     title.classList.remove("active");
// })


// toogle.addEventListener("click" , function() {
//     title.classList.toggle("active")
// })

// dynamic product => delete btn , all delete 

// card => background = dark , light

// btn => background = white , color = black 
// btn => backgroufn = black , color = white 



// const product = document.getElementById("product");
// const price = document.getElementById("price");
// const addBtn = document.getElementById("addBtn");
// const container = document.getElementById("container");


// addBtn.addEventListener("click" , function () {
//     const name = product.value;
//     const price1 = price.value;


//     const card = document.createElement("div");

//     const title = document.createElement("h2");
//     title.textContent= name;

//     const priceText = document.createElement("p");
//     priceText.textContent= `$ ${price1}`;

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit"

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent= "delete";

//     card.append(title , priceText , editBtn , deleteBtn);


//         editBtn.addEventListener("click" , function() {
//             product.value= title.textContent;
//             price1.value = priceText.textContent.replace("$" , "");
//             addBtn.textContent = "update product";
//         })

//     deleteBtn.addEventListener("click" , function() {
//        card.remove();
//     })

//     container.append(card);
// })


// click , mouseover , keydown , , input , submit , focus 

// event => something happens => js Response 


// const btn = document.getElementById("btn");

// btn.addEventListener("dblclick" , function() {
//     alert("you clicked");
// })

// const input = document.getElementById("name");
// const output = document.getElementById("output");

// input.addEventListener("input" , function() {
//     output.textContent= input.value;
// })


// // input.addEventListener("change" , function() {
// //     console.log(input.value);
// // })

// input.addEventListener("blur" , function() {
//     console.log("input lost focus");
// })


// document.addEventListener("keydown" , function() {
//     console.log("key pressed");
// })


// trim() => string , extra space remove 

const todoInput = document.getElementById("todo");
const addBtn = document.getElementById("addbtn");
const list = document.getElementById("list");

    let editTodo = null;

addBtn.addEventListener("click" , function() {
    const task = todoInput.value.trim();
    if (task === ""){
        alert("please enter a task");
        return;
    }



    if (editTodo !== null) {
        editTodo.textContent = task;

        editTodo = null;

        addBtn.textContent = "add todo";

        todoInput.value = "";
        return;
    }

    const todo = document.createElement("div");

    const todoText = document.createElement("span");
    todoText.textContent = task;


    const editBtn = document.createElement("button");
    editBtn.textContent= "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent= "Delete";

    todo.append(todoText , editBtn , deleteBtn);

    list.append(todo);


    editBtn.addEventListener("click" , function() {
        todoInput.value = todoText.textContent;

        editTodo = todoText;
        addBtn.textContent = "update todo";
    });

    deleteBtn.addEventListener("click" , function() {
        todo.remove();
    })
})