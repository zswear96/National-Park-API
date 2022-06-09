const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let nationalPark = {
    'yellow': {
        'Name': 'Yellow Stone',
        'age': 150,
        'location': 'Wyoming',
        'Acres': '2,221,766'
    },
    'rocky':{
        'Name': 'Rocky Mountain National Park',
        'age': 107,
        'location': 'Colorado',
        'Acres': '265,807.25'
    },
    'unknown':{
        'Name': '?',
        'age': 'unknown',
        'location': 'unknown',
        'Acres': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const natParkName = request.params.name.toLowerCase()
    if(nationalPark[natParkName]){
        response.json(nationalPark[natParkName])
    }else{
        response.json(nationalPark['unknown'])
    }
})

app.get('/api', (request,response) => {
    response.json(nationalPark)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})