 import Question from "../models/questionModel.js";

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll();
        res.json(questions);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getCategoryQuestions = async (req, res) => {
    try {
        const questions = await Question.findAll({
            where: {
                subject_id: req.body.subjectId
            }
        });
        console.log(questions);
        res.json(questions);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createSubject = async (req, res) => {
    try {
        await Subject.create(req.body);
        res.json({
            "message": "Subject Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateSubject = async (req, res) => {
    try {
        await Subject.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Subject Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteSubject = async (req, res) => {
    try {
        await Subject.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Subject Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 