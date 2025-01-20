function greet(name,callback)
{
    console.log("Hello "+name)
    callback(name)
}

function goodBye(name)
{
    console.log("Hi Good Bye to "+ name)
}

greet("Hari",goodBye)