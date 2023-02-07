
// var btn = document.querySelector("button");
// var h4 = document.querySelector("h4");

// var val = 0;
// btn.addEventListener("click", function () {
//     if (val === 0)
//     {
//         h4.innerHTML = "request sent";
//         h4.style.color = "rgb(243, 221, 97)";
//         btn.innerHTML = "Cancel Request";
//         val = 1;
//         setTimeout(function () {
//             h4.innerHTML = "Friends";
//             h4.style.color = "green";
//             btn.innerHTML = "Delete Friend";
//         },(Math.random()*10)*1000)
//     }
//     else {
//         h4.innerHTML = "Strangers";
//         h4.style.color = "red";
//         btn.innerHTML = "Add Friend";
//         val = 0;
//     }
// })

var arr = [
    { name: "Gautam Gambhir", img: "https://th.bing.com/th/id/OIP._NBaORRnWmyG6T1tlVFx0wHaEc?w=278&h=180&c=7&r=0&o=5&pid=1.7", status: "stranger" },
    { name: "Smriti Mandhana", img: "https://femina.wwmindia.com/content/2019/dec/mandhana-smriti-mandha-in1576652030.jpg", status: "stranger" },
    { name: "Virat Kohli", img: "https://www.cricketcountry.com/wp-content/uploads/2019/03/ViratKohli2ndODINagpur.jpg", status: "stranger" }
];



function print() {
    var clutter = "";

    arr.forEach(function (val,index) {
        clutter+=`<div class="card">
        <img src="${val.img}" alt="">
        <h3>${val.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis voluptatibus, voluptatum veniam consequatur delectus aliquid, libero ea dolorum! Dignissimos, assumenda esse! Nisi, enim!</p>
        <h5 id="${val.status.split(" ").join("")}">${val.status}</h5>
        <button class="${val.status==="stranger" ? "yellow" : "red"}" id="${index}">${val.status==="stranger"? "Add Friend" : "remove friend"}</button>
    </div>`
    })
    document.querySelector("#cards").innerHTML = clutter;
} 
var cards = document.querySelector("#cards");
print();
var flag = 0;
var timer;
cards.addEventListener("click", function (details) {
    if (flag === 0) {
        arr[details.target.id].status = "friend request sent";
        print();
        
        timer=setTimeout(function () {
            arr[details.target.id].status = "friend";
            print();
        },2000)
        print();
        flag = 1;
    }
    else {
        clearTimeout(timer); 
        arr[details.target.id].status = "stranger";
        print();
        flag = 0;
    }
    
})
