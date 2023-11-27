const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const password = encodeURIComponent("pDsyh0lbadCQ2Y2F");

app.use(cors());
app.use(bodyParser.json());

// Connectez-vous à votre base de données MongoDB
mongoose.connect('mongodb+srv://admin:${password}@cluster0.ioscysq.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connexion à la base de données MongoDB établie avec succès');
});

// Définissez le schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    password: String,
});

const UserModel = mongoose.model('user', userSchema);

// Endpoint pour l'inscription
app.post('/inscription', async (req, res) => {
    const { nom, prenom, password } = req.body;

    try {
        const newUser = new UserModel({ nom, prenom, password });
        await newUser.save();
        res.json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
