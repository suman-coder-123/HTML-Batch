
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

// const todoInput = document.getElementById("todo");
// const addBtn = document.getElementById("addbtn");
// const list = document.getElementById("list");

//     let editTodo = null;

// addBtn.addEventListener("click" , function() {
//     const task = todoInput.value.trim();
//     if (task === ""){
//         alert("please enter a task");
//         return;
//     }



//     if (editTodo !== null) {
//         editTodo.textContent = task;

//         editTodo = null;

//         addBtn.textContent = "add todo";

//         todoInput.value = "";
//         return;
//     }

//     const todo = document.createElement("div");

//     const todoText = document.createElement("span");
//     todoText.textContent = task;


//     const editBtn = document.createElement("button");
//     editBtn.textContent= "Edit";

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent= "Delete";

//     todo.append(todoText , editBtn , deleteBtn);

//     list.append(todo);


//     editBtn.addEventListener("click" , function() {
//         todoInput.value = todoText.textContent;

//         editTodo = todoText;
//         addBtn.textContent = "update todo";
//     });

//     deleteBtn.addEventListener("click" , function() {
//         todo.remove();
//     })
// })



// const fileInput = document.getElementById("fileInput");
// const fileInfo = document.getElementById("fileInfo");

// fileInput.addEventListener("change" , function() {
//     const file = fileInput.files[0];

//     fileInfo.innerHTML= `
//     <p> Name : ${file.name}</p>
//     <p> Size : ${file.size}</p>
//     <p> Type : ${file.type}</p>
//     `;
// })


// const circle = document.getElementById("circle");

// document.addEventListener("mousemove" , function(event){
//     // console.log("X : " , event.clientX);
//     // console.log("Y :" , event.clientY);

//     circle.style.left = event.clientX + "px";
//     circle.style.top = event.clientY + "px";
// })


// let select = document.getElementById("select");
// select.addEventListener("change" , function() {
//     alert("your selected country :" + select.value);
// })

// const btn = document.getElementById("btn");

// btn.addEventListener("click" , function(event){
//     console.log(event.target.textContent);
// })


// to make the input empty after data access => preventDefault()

// const form = document.getElementById("form");
//     let name = document.getElementById("name").value
// let error = document.getElementById("error")

// form.addEventListener("submit" , (e) => {
//     e.preventDefault();

//     if (name === ""){
//         error.textContent= "name is required";
//         error.style.color = "red";
//         error.style.fontSize = "10px";
//     } else {
//         error.textContent = "form submitted successfully";
//          error.style.color = "red";
//         error.style.fontSize = "10px";
//     }
// });



// register => info => database => unique id => token 


// localStorage => it allows js to save data in the browser 

// localStorage => tab close , browser close  , system  close 


// to save the data in localstorage => setItem();

// to retrive the saved data => getItem();


// localStorage.setItem("name" , "suman");

// let name = localStorage.getItem("name");

// console.log(name);



// let name = document.getElementById("name");
// let saveBtn = document.getElementById("saveBtn");
// let result = document.getElementById("result");


// saveBtn.addEventListener("click" , function() {
//     localStorage.setItem("UserName" , name.value);

//     result.textContent = "data saved...";
//     result.style.color = "green";
// });

// to remove a particular element => removeItem 


// localStorage.removeItem("name");


// to remove the all the elements exists in the localStorage => clear()

// localStorage.clear();


// localStorage => only saved the data in the form of string 

// JSON => javascript obect notation 

// JSON is extremely important because localStorage can store only string 


// convert the object / array  data into string format => stringify()
// with the help of JSON 

// JSON.stringify (object name )


// opposite of  the data => string => object / array => JSON.parse();


// const user = {
//     name : "suman",
//     age : 12,
//     city : "jaipur",
// }

// const data = JSON.stringify(user);
// console.log(data);


// localStorage.setItem("Person" , data);


// localStorage.setItem("Person" , JSON.stringify(user));

// let Person1 = JSON.parse(localStorage.getItem("Person"));

// console.log(Person1);



// sessionStorage.setItem("Username" , "suman");



// const myName = sessionStorage.getItem("Username");

// console.log(myName)



// cookies can store a small piece of data that a website can store in the browser 


// cookies are used for this things 
// login / session information 
// user prefrence 
// remembering setting
// tracking / analytics


// document.cookie = "username=suman";


// document.cookie = "username=suman; expires = Fri,30 Oct 2026 12:00 :00 UTC";



// Synchronised code  => those code run line by line 

// asynchronised code  => after some time run , future prediction code 



// asynchronous code => after some time => setTimeot , setInterval , callback , promises , then , catch , finally , async await , try , catch , API , 




// console.log("start");

// setTimeout(function() {
//     console.log("hello after 2 sec");
// } , 2000);

// console.log("end");



// const msg = document.getElementById("msg");

// setTimeout(function() {
//     msg.textContent  = "welcome to this website ....";
// } , 3000);



// setInterval => runs a functions again and again after a fixed interval 


//  let msg =  setInterval (function() {
//     console.log("hello");
// } , 1000);

// clearInterval(msg);


// let counter = document.getElementById("counter");

// let count = 0;

// setInterval(function() {
//     count++;
//     counter.textContent = count;
// } , 1000);


//  let counter = document.getElementById("counter");
//  let start = document.getElementById("start");
//  let stop = document.getElementById("stop");

//  let count = 0;
//  let timer;

//  start.addEventListener("click" , function() {
//     timer = setInterval(function() {
//         count++;
//         counter.textContent = count;
//     } , 1000);
//  });

//  stop.addEventListener("click" , function() {
//     clearInterval(timer);
//  })


// const msg = document.getElementById("msg");
// const btn = document.getElementById("btn");


// function startTask(callback) {
//     msg.textContent = "task is running ....";
//     setTimeout(function() {
//         callback();
//     } , 3000);
// }



// function taskCompleted () {
//     msg.textContent = "task completed";
// }

// btn.addEventListener("click" , function() {
//     startTask(taskCompleted);
// });



const msg = document.getElementById("message");
const btn = document.getElementById("start");

btn.addEventListener("click" , function() {
    login(function() {
        getUser(function() {
            getProduct(function() {
                placeOrder(function() {
                    msg.textContent = "order completed";
                })
            })
        })
    })
})


function login(callback) {
    msg.textContent = "Logging in ....."
    setTimeout (function() {
        callback();
    } , 1000);
}


function getUser(callback) {
    msg.textContent = "Getting user ....."
    setTimeout (function() {
        callback();
    } , 1000);
}


function getProduct(callback) {
    msg.textContent = "getting Product....."
    setTimeout (function() {
        callback();
    } , 1000);
}



function placeOrder(callback) {
    msg.textContent = "Order Placed ....."
    setTimeout (function() {
        callback();
    } , 1000);
}



// promises => it is an object that represent the result of an asynchrounous code / operation 

// pending  => waiting stage 
// resolve  => success 
// reject  => failed , error 



// syntax of promises 


// let promise = new Promise(function (resolve , reject) {
//     resolve("sucsess");
// })



// when the promise successfully resolve => .then()  => to print or show the result 

// when the promise reject => .catch() => to print the error or failed message 


// let promise = new Promise (function(resolve , reject) {
//     resolve("data received");
// });

// promise.then(function(result) {
//     console.log(result);
// })


// let promise = new Promise (function(resolve , reject) {
//     reject("something went wrong");
// });

// promise
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.log(error);
// })




let promise = new Promise(function(resolve , reject) {
    let login = false;

    if (login) {
        resolve("login successfully");
    } else {
        reject ("invalid login info");
    }
});

promise
.then(function(result) {
    console.log(result);
})

.catch(function(error) {
    console.log(error);
})