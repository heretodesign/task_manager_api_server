
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 3, 6, 7])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log("Success!", result);
}).catch((error) => {
    console.log("Error!", error);
}) 

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 3, 6, 7])
        }, 2000)
    })
}

add(2, 5)
    .then((sum) => {
        console.log("sum!", sum);
        return add(sum, 4)

    }).then((sum2) => {
        console.log(sum2)
    })
    .catch((error) => {
        console.log("Error!", error);
    })

// async and await    
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject("Numbers must be non-negative")
            }

            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum1 = await add(sum, 99)
    const sum2 = await add(sum1, 99)
    const sum3 = await add(sum2, 99)
    return sum3
}

doWork().then((result) => {
    console.log("result!", result);
}).catch((error) => {
    console.log("Error!", error);
})
    