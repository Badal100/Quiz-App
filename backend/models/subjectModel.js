import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('subject',{
    quiz_time:{
        type: DataTypes.INTEGER
    },
    subject_name:{
        type: DataTypes.STRING
    },
    subject_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
},{
    freezeTableName: true,
    timestamps: false,
    
});
 
export default Product;