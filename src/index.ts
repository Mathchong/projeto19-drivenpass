import app from './app/app.js';
import './app/setup.js'

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});