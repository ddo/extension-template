export default {
    on,
}

// on messages
function on(req, sender, sendResponse) {
    switch (req.channel) {
        case 'test':
            console.log('test msg:', req.data)
            sendResponse('response from background')
            break

        default:
            sendResponse(null)
    }

    return true
}
