import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('question',{
    option1:{
        type: DataTypes.STRING
    },
    option2:{
        type: DataTypes.STRING
    },
    option3:{
        type: DataTypes.STRING
    },
    option4:{
        type: DataTypes.STRING
    },
    answer:{
        type: DataTypes.INTEGER
    },
    subject_id:{
        type: DataTypes.INTEGER
    },
    question_title:{
        type: DataTypes.STRING
    },
    question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
},{
    freezeTableName: true,
    timestamps: false,
    
});
 
export default Product;