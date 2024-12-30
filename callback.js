const task1=(call)=>{
    setTimeout(()=>{
        console.log("Hello1");
        call()
    },3000)
}
const task2=(call)=>{
    setTimeout(()=>{
        console.log("Hello2");
        call()
    },2000)
}
const task3=(call)=>{
    setTimeout(()=>{
        console.log("Hello3");
        call()
    },5000)
}
const task4=(call)=>{
    setTimeout(()=>{
        console.log("Hello4");
        call()
    },1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("world");
                
            })
        })
    })
})