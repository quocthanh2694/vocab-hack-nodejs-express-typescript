import { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/userController";
import { VocabController } from "../controllers/VocabController";

export class Routes {

    public userController: UserController = new UserController()
    public vocabController: VocabController = new VocabController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful!'
                })
            })

        // User Route
        app.route('/user')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.userController.getUsers)

            .post(this.userController.addNewUser);

        app.route('/user/:userId')
            // get specific user
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
        // End User Route


        // Vocab route
        app.route('/vocab')
            .get(this.vocabController.getVocabs)
            .post(this.vocabController.addNewVocab);

        app.route('/vocab/:vocabId')
            .get(this.vocabController.getVocabById)
            .put(this.vocabController.updateVocab)
            .delete(this.vocabController.deleteVocab);
        // End Vocab route
    }
}