const wait = (timeToDelay) =>
    new Promise((resolve) => setTimeout(resolve, timeToDelay))

export default {
    wait,
}