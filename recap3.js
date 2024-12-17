const getPromise = (name) => {
    return new Promise((resolve, reject) => {
        console.log('Promise is made', name)
        setTimeout(() => {
            const error = true
            if(!error){
                resolve('Result of Promise 1')
            }else{
                reject('OOOPPSSSS!!!!')
            }
        }, 2000)
    })
}

getPromise('Mama') 
    .then(res => console.log(res))
    .catch(err => console.log(err))

/* Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values)
    })
    .catch(error => console.log(error)) */
/* promise1
 .then(res => {
    console.log(res)
    promise2
        .then(res => {
            console.log(res)
            promise3
                .then(res => {
                    console.log(res)
                })
        })
 }) */