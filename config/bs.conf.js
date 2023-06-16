require('dotenv').config()

const { generalConf } = require('./general.conf')


let capabilities = {
    capabilities: [{
        'app': `${process.env.ANDROID_APP_ID}`,
        'device': 'Samsung Galaxy S22 Ultra',
        'os_version': '12.0',
        'projectName': "BrowserStack Samples",
        'buildName': 'browserstack build',
        'sessionName': 'BStack parallel webdriverio-appium',
    }]
}
let bsConf = {
    user: `${process.env.BSUSER}`,
    key: `${process.env.BSKEY}`,
    ...generalConf,
    ...capabilities,
    services: ['browserstack'],
    hostname: 'hub.browserstack.com'
}

module.export = { bsConf }
console.log(`${process.env.BSKEY}`)