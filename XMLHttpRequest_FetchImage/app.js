function eventListener(){
    console.log("This is how the Request looks like Now", this);
    let data = JSON.parse(this.responseText);
    console.log("The Response Text is now converted to JSON", data);
    let user = data.results[0];
    console.log("the user now looks like",user);
    let fisrtName = user.name.first;
    let lastName = user.name.last;
    let src = user.picture.large;

    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');

    img.src = src;
    p.innerHTML = `${fisrtName} ${lastName}`;

    document.getElementById('user').appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
}

function requestError(){
    console.log("Wooops I did it again");
}


let url = 'https://randomuser.me/api';
let method = 'GET';
let xhr = new XMLHttpRequest();

console.log("This is how our Request Looks like Initially", xhr);

xhr.open(method, url, true);

xhr.onload = eventListener;
xhr.onerror = requestError;

xhr.send();