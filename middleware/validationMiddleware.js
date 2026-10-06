import { body, validationResult } from 'express-validator';
import mongoose from 'mongoose';

export const validateEmployee = [
    body('first_name')
        .trim()
        .notEmpty()
        .withMessage('First name is required'),

    body('last_name')
        .trim()
        .notEmpty()
        .withMessage('Last name is required'),



    body('email')
        .trim()
        .isEmail()
        .withMessage('A valid email is required'),



    body('position')
        .trim()
        .notEmpty()
        .withMessage('Position is required'),

    body('department')
        .trim()
        .notEmpty()
        .withMessage('Department is required'),



    body('salary')
        .isNumeric()
        .withMessage('Salary must be a number')
        .isFloat({ min: 0 })
        .withMessage('Salary cannot be negative'),



    body('date_of_joining')
        .isISO8601()
        .withMessage('Date of joining must be a valid date'),



    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];

export const validateEmployeeId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.eid)) {
        return res.status(400).json({
            message: 'Invalid employee ID'
        });
    }
    next();
};

export const validateEmployeeQueryId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.query.eid)) {
        return res.status(400).json({
            message: 'Invalid employee ID'
        });
    }
    next();
};

export const validateSignup = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required'),

    body('email')
        .trim()
        .isEmail()
        .withMessage('A valid email is required'),

    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];


export const validateLogin = [
    body('email')
        .optional()
        .trim()
        .isEmail()
        .withMessage('A valid email is required'),
    body('username')
        .optional()
        .trim(),

    body('password')
        .notEmpty()
        .withMessage('Password is required'),

    (req, res, next) => {


        const errors = validationResult(req);

        if ( !req.body || !req.body.email && !req.body.username) {
            return res.status(400).json({
                errors: [{ msg: 'Either email or username is required' }]
            });
        }

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        next();
    }
];