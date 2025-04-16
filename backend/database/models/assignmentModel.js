import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";

const Assignment = sequelize.define("Assigment",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fileUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    submittedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    studentID:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    timestamps: true
})

export default Assignment;