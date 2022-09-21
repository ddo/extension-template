import Helper from '@/helper'

export default {
    checkSession,
}

async function checkSession() {
    await Helper.wait(2000)
    return { uuid: 'test' }
}
