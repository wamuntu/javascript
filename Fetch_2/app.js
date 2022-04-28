let customPost = {
    title: 'Hello World',
    body: 'This is a Test .....',
    userId: '1'
}

customHeader = {
    "content-type":"application/json; charset=UTF-8"
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: customHeader,
    body: JSON.stringify(customPost),
})
.then(response => response.json())
.then(response => {console.log(response)});