import app from './app';
// import * as https from 'https';
import * as http from 'http';
// import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
    // key: fs.readFileSync('./config/key.pem'),
    // cert: fs.readFileSync('./config/cert.pem')
}

// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// })
http.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('============Express server listening on port ' + PORT);
})