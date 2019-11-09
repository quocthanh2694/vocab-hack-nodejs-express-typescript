import * as mongoose from 'mongoose';
import { VocabSchema } from '../models/VocabModel';
import { Request, Response } from 'express';

const Vocab = mongoose.model('Vocab', VocabSchema);

export class VocabController {

    public addNewVocab(req: Request, res: Response) {
        let newVocab = new Vocab(req.body);

        newVocab.save((err, Vocab) => {
            if (err) {
                res.send(err);
            }
            res.json(Vocab);
        });
    }

    public getVocabs(req: Request, res: Response) {
        Vocab.find({}, (err, Vocab) => {
            if (err) {
                res.send(err);
            }
            res.json(Vocab);
        });
    }

    public getVocabById(req: Request, res: Response) {
        Vocab.findById(req.params.VocabId, (err, Vocab) => {
            if (err) {
                res.send(err);
            }
            res.json(Vocab);
        });
    }

    public updateVocab(req: Request, res: Response) {
        Vocab.findOneAndUpdate({ _id: req.params.VocabId }, req.body, { new: true }, (err, Vocab) => {
            if (err) {
                res.send(err);
            }
            res.json(Vocab);
        });
    }

    public deleteVocab(req: Request, res: Response) {
        Vocab.remove({ _id: req.params.VocabId }, (err, Vocab) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Vocab!' });
        });
    }

}