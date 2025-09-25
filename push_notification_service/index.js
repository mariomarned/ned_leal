const admin = require('firebase-admin');
const express = require('express');
const app = express();

// TODO: Reemplaza con la ruta a tu archivo de credenciales de Firebase
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());

app.post('/send-notification', (req, res) => {
  const { token, title, body } = req.body;

  const message = {
    notification: {
      title: title,
      body: body
    },
    token: token
  };

  admin.messaging().send(message)
    .then((response) => {
      res.status(200).send('Successfully sent message: ' + response);
    })
    .catch((error) => {
      res.status(500).send('Error sending message: ' + error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});