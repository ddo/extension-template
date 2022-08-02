const ex = chrome || browser

const wait = (timeToDelay) =>
    new Promise((resolve) => setTimeout(resolve, timeToDelay))

export default {
    wait,
    closeTab,
    openTab,
    openPopup,
    getURL,
    sendMsg,
    onMsg,
    detectLanguage,
    setPopupBadge,
}

function closeTab() {
    ex.tabs.getCurrent(function(tab) {
        ex.tabs.remove(tab.id, function() {})
    })
}

function openTab(url) {
    ex.tabs.create({ url })
}

function openPopup(url) {
    ex.windows.create({
        url,
        type: 'popup',
        height: 800,
        width: 800,
    })
}

function getURL(path) {
    return ex.runtime.getURL(path)
}

function sendMsg(data, cb) {
    ex.runtime.sendMessage(data, cb)
}

function onMsg(cb) {
    ex.runtime.onMessage.addListener(cb)
}

function detectLanguage() {
    if (!navigator) return null
    if (navigator.languages) return reviseLocale(navigator.languages[0])
    return reviseLocale(navigator.language)
}

function setPopupBadge(text) {
    ex.action.setBadgeText({ text })
    // red background
    ex.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
}