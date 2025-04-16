const myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const url = "https://dummyjson.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({userId: "32",title:"hello ji"}),
    headers: myHeaders,
};

async function getData(){
    const response = await fetch(url);
    console.log("response: ",response);
    let data = await response.json();
    console.log("get data: ",data);
}

async function postData(){
    const response = await fetch("https://dummyjson.com/posts/add",options);
    console.log("response: ",response);
    let data = await response.json();
    console.log("post data: ",data);
}

async function processData(){
    await postData();
    await getData();
}

processData();

// async function sayMyName(){
//     setTimeout(function(){
//         console.log("hi im ashish here in this code");
//     },3000);
// }
// sayMyName();