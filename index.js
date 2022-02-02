const express= require ('express');
const config = require ('config');
const path=require('path');

const app=express();

app.use(express.json({extended:true}));

app.use('/api/ping',require('./routes/ping.routes'));
app.use('/api/pong',require('./routes/ping.routes'));

const PORT=config.get('port')||5000;

async function start() {
    try {
        app.listen(PORT,()=>console.log(`App has been started on port ${PORT}`)); 
    } catch (e) {
        console.log('Server error:', e.message);
        process.exit(1)
    }
}

start();