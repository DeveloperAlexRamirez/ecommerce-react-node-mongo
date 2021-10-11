import express, { Application } from 'express'
import cors from 'cors'
import videosRoutes from '../routes/video'
import connectDB from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private videoPath: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '5000';
        this.videoPath = '/videos';

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
        this.app.use(this.videoPath, videosRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port: ', this.port);
        })
    }
}

export default Server;