import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from 'express-validator';

const router = Router();

const validateAuth = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3, max: 50 }).withMessage('Username must be between 3 and 50 characters'),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

router.post("/register", validateAuth, register);
router.post("/login", validateAuth, login);

export default router;
