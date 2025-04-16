import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";

const User = sequelize.define("Users",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    eamil: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
        
    }
  
}, {
    timestamps:true
})


export default User;






