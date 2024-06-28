import { Score } from "../models";

export const getScoreHandler = async (req, res, next) => {
    try {
        const data = Score.find({});

        return res.status(201).json({
            message: 'new score has been added',
            success: true,
            data,
        });
    } catch (err) {
        const error = new Error(err.message);
        error.statusCode = 500; // Setting a custom status code
        return next(error);
    }
};

export const postScoreHandler = async (req, res, next) => {
    try {
        const {Name, startTime, endTime, guesses, score, wordLength, repeated} = req.body;

        if (!Name || !startTime || !endTime || !guesses || !score || !wordLength || !repeated) {
            const error = new Error('Missing required fields');
            error.statusCode = 400; // Setting a custom status code
            return next(error);
        }

        const data = await Score.create({
            Name,
            startTime,
            endTime,
            guesses,
            score,
            wordLength,
            repeated
        });

        return res.status(201).json({
            message: 'new score has been added',
            success: true,
            data,
          });
        
    } catch (err) {
        const error = new Error(err.message);
        error.statusCode = 500; // Setting a custom status code
        return next(error);
    }
};