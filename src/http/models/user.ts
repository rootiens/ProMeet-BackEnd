const {DataTypes} = require("sequelize");
import sequelize from "../../utils/db";
// import validator from "validator";

const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6,
                max: 32
            },
        },
        mobile: {
            data: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
);

export default User;