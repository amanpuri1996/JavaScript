// getting data from api 
// fetch("https://reqres.in/api/users").then(function(res){
//     return res.json();
//     // converting into json to Object
// }).then(res => {
//     res.data.forEach((item,i) => {
//         // console.log( item.email)
//         document.write(item.email + "<br>")
//     });
// })
// ye promise return karta hai 
//promise mtlb ye es6 me  ko padh
//https://reqres.in/api/users
//now we are getting data from api
//listen step delete mt kr comment kr de ok
// now we are going to post some data like we going register new user 
//firstly we need to create a  forms  ..??? now wo tu baad me kar liyo mai dummy data de dunga



let user = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}


fetch("https://reqres.in/api/register", {
    // we need tell which method we are calling
    method: 'POST',
    //  now we need to send data like email or password
    // we need to convert Object into json
    body: JSON.stringify(user),
    // now we need to tell data type which we sending.
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
}) // after submiting we will get some response from server
    .then(function (res) {
        // now we need to convert json(we are getting from server) into object 
        //   console.log(res.json())
        //   now we are getting promise if we are getting promise then we should use .then 
        return res.json();
    })
    .then(function (res) {
        console.log(res)
        // we are getting respose 
        //yo
        //bro i thing its enough for today.. ok
        // good night good night
    })


// fetch api tutorial
console.log("this is my first fetch api project");

//button with id btn
let mybtn = document.getElementById("mybtn");

//div with id content
let content = document.getElementById("content");

function fun_getData() {
    console.log("starting function");
    document.write("starting function");
    url = "https://reqres.in/api/users";
    //   url = "fetch.txt";
    fetch(url).then((resolve) => {
        console.log("start fetching data");
        document.write("start fetching data");
        return resolve.text();
    }).then((data) => {
        console.log("End fetching data");
        console.log(data);
        document.write(data);
        document.write("End fetching data");
    });
}


function fun_getData_github() {
    console.log("starting function");
    document.write("starting function");
    url = "https://api.github.com/users";
    fetch(url).then((resolve) => {
        console.log("start fetching data");
        document.write("<br>start fetching data<br>");
        return resolve.json();
    }).then((data) => {
        console.log("End fetching data");
       // console.log(data);
        document.write(JSON.stringify(data));
        document.write("<br>End fetching data<br>");
    });
}


fun_getData_github();

function post_data() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"aman1290","salary":"123","age":"23"}'
    params = {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
        .then(data => console.log(data));
}
post_data();