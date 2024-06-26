import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesUpdateUserRequest = [
    body('name').optional().isString(),
    body('email').optional().isEmail(),
    body('password_confirmation').optional().isString().isLength({ min: 8}),
    body('password').optional().isString().isLength({ min: 8}),
];

class UpdateUserRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       
        nextFunction();
    }
}

export { rulesUpdateUserRequest, UpdateUserRequest };