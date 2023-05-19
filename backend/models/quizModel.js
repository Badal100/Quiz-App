import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes} = Sequelize;

  const Quiz =  db.define('quiz',{
        quiz_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        total_question:{
           type: DataTypes.INTEGER
        },
        question_attempted:{
            type:DataTypes.INTEGER
        },
        correct_answer:{
            type:DataTypes.INTEGER
        },
        quiz_date:{
            type:DataTypes.DATE
        },
        subject_id:{
            type:DataTypes.INTEGER
        },
        learner_id:{
            type:DataTypes.INTEGER
        }
},
{
    freezeTableName:true,
    timestamps:false
});

export default Quiz;