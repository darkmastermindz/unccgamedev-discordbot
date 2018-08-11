import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { request } from 'http';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    console.log("hello");
    response.send("Hello this is from Firebase!");
});


export const getBostonWeather = functions.https.onRequest((request, response) => {
    const promise = admin.firestore().doc('cities-weather/boston-ma-us').get();
    promise.then(snapshot => {
        const data = snapshot.data();
    })

})