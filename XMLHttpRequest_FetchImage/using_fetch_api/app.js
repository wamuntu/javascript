let url = "https://randomuser.me/api";

fetch(url)
.then(responseOne => responseOne.json())
.then(function (responseTwo) {
let user = responseTwo.results[0];
let li = document.createElement('li');
let img = document.createElement('img');
let p = document.createElement('p');

img.src = user.picture.large;
p.innerHTML = `${user.name.first} ${user.name.last}`;

li.appendChild(img);
li.appendChild(p);

document.getElementById('user').appendChild(li);
})
.catch(error => {
    console.log("OOOPs. there is an error:", error);
});