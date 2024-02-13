const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');
console.log(getAllUsers); // Ceci devrait afficher la fonction, pas `undefined`
console.log(createUser); // De même ici
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;
