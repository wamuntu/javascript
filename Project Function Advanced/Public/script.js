function showQuotes(){
let quotes = [];
quotes[0] = "When you reach the end of the rope, tie a knot in it and hang on";
quotes[1] = "There is nothing permanent but change";
quotes[2] = "Luck is a divident of sweat";
quotes[3] = "It takes much time to wish as it does to plan";

let rand = Math.floor(Math.random() * quotes.length);

document.getElementsByTagName('p')[0].innerHTML = quotes[rand];

}