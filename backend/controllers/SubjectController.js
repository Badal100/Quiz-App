 import Subject from "../models/subjectModel.js";

export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.json(subjects);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(subject[0]);
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
 