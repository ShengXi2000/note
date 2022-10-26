const wait = () => {
    return new Promise(res=>{
        console.log(1)
        setTimeout(res,1000)
    })
}

await wait()
await wait()
await wait()