import { Router, Request, Response } from 'express';
import StudentController from './controllers/StudentController';
const routes = Router();



routes.get('/', (request: Request, response: Response) => {
    return response.json({
        message: "routes dashboard ..."
    })
});

routes.post('/student', StudentController.create);

routes.get('/a', (request: Request, response: Response) => {
    return response.json({
        message: "routes get A"
    })
});


export default routes;