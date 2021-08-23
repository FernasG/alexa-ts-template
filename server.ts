import express, { Request, Response } from 'express';
import { ExpressAdapter } from 'ask-sdk-express-adapter';
import handler from './src/handler';

const app = express();
const adapter = new ExpressAdapter(handler, true, true);
const port = 3333;

(() => {
    app.post('/', adapter.getRequestHandlers());
    
    app.get('/', (req: Request, res: Response) => {
        res.send('Alexa TS Template V1.0 - [23/08/2021]');
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})();