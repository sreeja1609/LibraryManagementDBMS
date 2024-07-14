"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
const index_1 = __importDefault(require("../Configuration/index"));
const Books_1 = __importDefault(require("./Books"));
const Members_1 = __importDefault(require("./Members"));
const { DataTypes } = sequel;
const Loan = index_1.default.define('Loan', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Books_1.default,
            key: 'id'
        },
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Members_1.default,
            key: 'id'
        },
    },
    loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = Loan;
//# sourceMappingURL=Loans.js.map