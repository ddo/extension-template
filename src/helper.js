const ex = chrome || browser

const wait = (timeToDelay) =>
    new Promise((resolve) => setTimeout(resolve, timeToDelay))

export default {
    wait,
    detectLanguage,
}

function detectLanguage() {
    if (!navigator) return null
    if (navigator.languages) return reviseLocale(navigator.languages[0])
    return reviseLocale(navigator.language)
}