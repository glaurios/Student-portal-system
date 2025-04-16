import User from "./userModel.js";
import Assignment from "./assignmentModel.js";
import sequelize from "../dbConnect.js";


User.hasMany(Assignment,{foreignKey:"studentID"});
Assignment.belongsTo(User,{foreignKey:"studentID"});


const db = {
    User,
    Assignment,
    sequelize
};

export default db;