const ex = chrome || browser

import Helper from '@/helper'
import Ex from '@/extension'

import Messages from './messages'
ex.runtime.onMessage.addListener(Messages.on)

console.log('background')

void 0
;(async () => {
    await Helper.wait(15000)
    // Ex.openTab('https://ddict.me/')
})()