const express = require('express');
const sequelize = require('./bdd/database'); // Assurez-vous que le chemin est correct
const userRoutes = require('./routes/userRoutes');
const apartmentRoutes = require('./routes/apartmentRoutes');
const reservationRoutes = require('./routes/reservationRoutes'); // Importez les routes de réservation
const app = express();

// Placez app.use(express.json()); ici pour s'assurer que le middleware de parsing JSON est appliqué
// avant toute route ou middleware qui en dépend.
app.use(express.json());

// Définition des routes utilisateur
app.use('/api/users', userRoutes);
app.use('/api/apartments', apartmentRoutes);
app.use('/api/reservations', reservationRoutes); // Utilisez les routes de réservation

// Exemple de route simple pour tester que le serveur fonctionne
app.get('/route', async (req, res) => {
    try {
        // Logique susceptible de lancer une exception
        res.status(200).json({ message: "Succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
});

const PORT = process.env.PORT || 3000;

// Synchronisation avec la base de données puis démarrage du serveur
sequelize.sync().then(() => {
    console.log('Connexion à la base de données réussie et modèles synchronisés');
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
}).catch(err => {
    console.error('Échec de la connexion à la base de données ou de la synchronisation des modèles:', err);
});
