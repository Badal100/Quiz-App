import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('quiz',{
    learner_class:{
        type: DataTypes.STRING
    },
    learner_name:{
        type: DataTypes.STRING
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
},{
    freezeTableName: true,
    timestamps: false,
    
});
 
export default Product;