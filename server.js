const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const bestFreePlugins = {
    'vital': {
        'category': 'synth',
        'company': 'Vital Audio',
        'description': `Crazy powerful and intuitive wavetable synth. Can't afford Serum? Get this. Can afford Serum? Still get this. Free version includes full plugin.`,
        'link': 'https://vital.audio/#getvital'

    },
    'analog obsession plugins': {
        'category': 'bundle',
        'company': 'Analog Obsession',
        'description': `A gold mine of plugins based on vintage hardware. They sound great! There's a lot in here, so downloading the whole lot can be a hassle, I've personally just downloaded a few that grabbed my fancy. You don't need to pay for a membership, the installers are linked in the posts.`,
        'link': 'https://www.patreon.com/analogobsession'

    },
    'denoiser classic': {
        'category': 'audio editing',
        'company': 'Bertom Audio',
        'description': 'This noise reduction plugin has saved me a few times when dealing with overly noisy recordings.',
        'link': 'https://www.bertomaudio.com/denoiser-classic.html'

    },
    'bbc symphony ochestra discover': {
        'category': 'instrument',
        'company': 'Spitfire Audio',
        'description': 'Includes 34 instruments, lets you live out your orchestra scoring desires. Comes with string, brass and woodwind instruments, and a piano.',
        'link': 'https://www.spitfireaudio.com/bbc-symphony-orchestra-discover?_gl=1*3anmju*_up*MQ..&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSIMvIrg3ts07dE6Cxr32mhhskEkzgUNAesYvUL7-hVemzT3Gkx2hDoaAvSREALw_wcB'
    },
    'spitfire labs': {
        'category': 'instrument',
        'company': 'Spitfire Audio',
        'description': `These guys recently turned this into a subscription plan, which is a bit lame. BUT, you don't have to subscribe and you can use their free instruments, and they bang.`,
        'link': 'https://labs.spitfireaudio.com/download'
    },
    'vaults beta': {
        'category': 'instrument',
        'company': 'Crow Hill',
        'description': `REDACTED`,
        'link': 'https://thecrowhillcompany.com/vaults/'
    },
    'unknown': {
        'category': 'unknown',
        'company': 'unknown',
        'description': 'very unknown',
        'link': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(bestFreePlugins)
})

app.get('/api/:name', (request, response) => {
    const pluginName = request.params.name.toLowerCase()
    if (bestFreePlugins[pluginName]) {
        response.json(bestFreePlugins[pluginName])
    } else {
        response.json(bestFreePlugins['unknown'])
    }

})

app.get('/api/category/:category', (request, response) => {
    const pluginCategory = request.params.category.toLowerCase()
    if (bestFreePlugins[pluginCategory]) {
        response.json(bestFreePlugins[pluginCategory])
    } else {
        response.json(bestFreePlugins['unknown'])
    }

})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})