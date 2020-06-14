import express from 'express';
import UserController from '../controllers/UserController';
import BullBoard from 'bull-board';
import Queue from '../lib/Queue';
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));


const userController = new UserController();
const routes = express.Router();


routes.post('/users', userController.store);
routes.use('/admin/queues', BullBoard.UI);

export default routes;