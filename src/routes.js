import express from 'express';
import UserController from './controller/UserController';

const routes = express.Router();

routes
    .post('/users', UserController.createUser)
    .get('/users', UserController.listUsers)
    .get('/users/:id', UserController.getUser)
    .put('/users/:id', UserController.updateUser)
    .delete('/users/:id', UserController.deleteUser);

export default routes;