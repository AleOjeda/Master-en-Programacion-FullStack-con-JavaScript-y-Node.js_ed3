module.exports = {
  port: process.env.PORT || 3000,
  apiKeyOmdb: process.env.OMBD_API || "---",
  firebasePath: "moviefire-apirest",
  firebaseConfig: {
    apiKey: "-----",
    authDomain: "moviefire-3bf94.firebaseapp.com",
    databaseURL: "https://moviefire-3bf94.firebaseio.com",
    projectId: "moviefire-3bf94",
    storageBucket: "moviefire-3bf94.appspot.com",
    messagingSenderId: "243777350623",
    appId: "1:243777350623:web:8e0f7589641cfa1b"
  }
}