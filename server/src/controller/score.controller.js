import Score from "../models/score.model.js";

export const getScoreHandler = async (req, res, next) => {
    try {
        const data = await Score.find({});

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
        const {Name, startTime, endTime, guesses, score, letterCount, letterRepeat} = req.body;

        if (!Name || !startTime || !endTime || !guesses || !score || !letterCount || !letterRepeat) {
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
            letterCount,
            letterRepeat,
        });

        return res.status(201).json({
            message: 'new score has been added',
            success: true,
            data,
          });
        
    } catch (err) {
        console.log(err)
        const error = new Error(err.message);
        error.statusCode = 500; // Setting a custom status code
        return next(error);
    }
};