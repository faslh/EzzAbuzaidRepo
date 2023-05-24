
		import * as functions from 'firebase-functions';
		import application from './main';
		exports.api = functions.https.onRequest(application.callback());
		exports.hello = functions.https.onRequest((req, res) => {
			res.json({ result: 'Hello from Firebase!' });
		});
		