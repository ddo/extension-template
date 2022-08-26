const ex = chrome || browser

export default {
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

function setPopupBadge(text) {
    ex.action.setBadgeText({ text })
    // red background
    ex.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
}
