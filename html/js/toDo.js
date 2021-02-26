console.log("Hi Amith!");
alert("Hi Amith!");
let input = prompt("What would you like to do?");
let todos = [];
while(input!=="quit" && input!=='q')
{
    
    if(input ==="list"){
        console.log("*******LIST START**************");
        for(let string of todos)
        {
            console.log(string);
        }
        console.log("********LIST END*************");
    }
    else if(input === "new")
    {
        const newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input==="delete")
    {
        const index = prompt("Enter an index to delete");
        console.log(index);
        todos.splice(parseInt(index)-1,1);
    }
    input=prompt("What would you like to do?");
}
console.log("Okay, you quit the app!");

