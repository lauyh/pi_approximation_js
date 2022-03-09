'use strict'

const express = require('express')
const MemoryCache = require('@outofsync/memory-cache');
const client = new MemoryCache({ bypassUnsupported: true });
const { francois_viete_approx } = require('../lib/pi')

const app = express()
app.set('view engine', 'ejs');
client.createClient();


app.get('/', (req, res) => {
    let pi = client.get("pi")
    if (!pi){
        pi = francois_viete_approx(100000000);
        client.set("pi", pi)
    }
    const sunCircumference = pi*1392530
    res.render('pages/index',{sunCircumference:sunCircumference})
})

app.get('/pi', (res, req)=>{

    try {
        let pi = client.get("pi")
        if (!pi){
            pi = francois_viete_approx(100000000);
            client.set("pi", pi)
        }

        res.send({status: 'ok', msg: 'Success', data: {pi: pi}})

    } catch (error) {
        console.log('An error had occurred in /pi api', error)
        res.send({status: 'err', msg: 'Fail', data: {}})
    }
})

app.listen(5001, ()=>{
    console.log('The application is serving on port 5001')
})