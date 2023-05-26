import { WebSocketServer } from 'ws';
import robot from 'robotjs';

//This script will receive the classes Teachable-Machine guessed and creates according Keystrokes to controll a Clickdummy (eg. Protopie, Figma)

//WEBSOCKET ________________________________________________________________________________________________
//WebSocket to receive data from html page
const wss = new WebSocketServer({
        port: 8080,
});

//the client will be stored here when a connection is established
let websocketClient = undefined;

//on connection the new client is passed to the connection() function and stored in our variable
wss.on('connection', function connection(ws) {
        websocketClient = ws;
        console.log('connection to client');

        //when receiving a message from the client find the accorrding key and tap it
        websocketClient.on('message', function message(data) {
                let keyToPress = '';
                let message = data.toString();
                console.log('Message: ', message);
                //ADJUST YOUR CLASSNAMES AND KEYS TO PRESS HERE: ===========================================================
                switch (message) {
                        case 'pink':
                                keyToPress = 'p';
                                break;

                        case 'green':
                                keyToPress = 'g';
                                break;

                        case 'nothing':
                                keyToPress = 'n';
                                break;

                        default:
                                console.log('nothing matches the switch cases');
                }
                //==========================================================================================================
                console.log('keyToPress: ', keyToPress);
                robot.keyTap(keyToPress);
        });
});

//ERROR HANDLING ___________________________________________________________________________________________
process.on('uncaughtException', function (err) {
        // Handle the error safely
        console.log('droin');
        console.log(err);
});
