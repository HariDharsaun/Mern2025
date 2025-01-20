async function asAw(){
    setTimeout(()=>{
        console.log("Inside simeTimeout")
    },5000)
    return "This is asyn/await example"
}

console.log(asAw())