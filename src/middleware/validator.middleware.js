import { body, param, validationResult } from 'express-validator';

export const validateEmployee = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
    body('salary')
        .notEmpty().withMessage('Salary is required')
        .isFloat({ min: 0 }).withMessage('Salary must be a positive number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                status: 'error',
                errors: errors.array() 
            });
        }
        next();
    }
];

export const validateId = [
    param('id')
        .isInt().withMessage('Invalid ID format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                status: 'error',
                errors: errors.array() 
            });
        }
        next();
    }
];
