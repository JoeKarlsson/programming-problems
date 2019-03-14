// Write a function that to retries a request after a delay

const setTimeoutPromise = async (delayMS) => {
    return new Promise(resolve => {
        setTimeout(resolve, delayMS);
    });
}

const retry = (cb, delayMS, maxAttempts, attempts = 0) => {

    return new Promise((resolve, reject) => {
        if (attempts >= maxAttempts) {
            reject('Max Attempts Failure');
        } else {
            try {
                resolve(cb());
            } catch (err) {
                setTimeoutPromise(delayMS)
                    .then(() => {
                        retry(cb, delayMS, maxAttempts, ++attempts)
                            .catch(() => { reject('Max Attempts Failure') });
                    })
                    .catch(() => { reject('Max Attempts Failure') });
            }
        }
    });
}

const callback = () => {
    throw new Error('whoops!');
    return 'Hello';
}

retry(callback, 500, 3)
    .then(console.log)
    .catch(err => console.log('final error', err));