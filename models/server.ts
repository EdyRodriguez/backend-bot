import  express, {Application} from "express";
import  userRoutes from "../routes/user.Routes";
import cors from "cors";
import db from "../db/connection";

class Server{

    private app : Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'

    }

    constructor(){

        this.app = express();
        this.port =process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    
    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch(error: any){
            throw new Error (error);
        }
    }
    routes(){
        this.app.use(this.apiPaths.users, userRoutes);
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port);
        });
    }
    
}

export default Server;