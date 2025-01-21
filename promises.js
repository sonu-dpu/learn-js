let sum = 0;
( async ()=>{
    const promise1 = new Promise(resolve=>setTimeout(()=>resolve(10), 20))
    sum += await promise1
    console.log(sum);
})();

