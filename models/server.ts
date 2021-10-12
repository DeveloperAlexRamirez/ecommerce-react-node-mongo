import express, { Application } from 'express'
import cors from 'cors'
import connectDB from '../db/connection';
import userPath from '../routes/user';
import authPath from '../routes/auth';

class Server {

    private app: Application;
    private port: string;
    private userPath: string;
    private authPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '5000';
        this.userPath = '/user';
        this.authPath = '/auth';

        this.connectionToDB();
        this.middlewares();
        this.routes();
    }

    async connectionToDB() {
        try {
            await connectDB();
        } catch (error) {
            console.log(error)
        }
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.userPath, userPath)
        this.app.use(this.authPath, authPath)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port: ', this.port);
        })
    }
}

export default Server;