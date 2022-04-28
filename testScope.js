function testScope(){
    let age=35;
debugger
    if(true){
        let age="Young";
        debugger
        console.log(age);
    }
    console.log(age);
}

testScope();

console.log(new Date(0));

