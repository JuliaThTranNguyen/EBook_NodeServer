import { NextFunction, Request, Response } from 'express';
import { LoginCredentialsSchema, SignupCredentialsSchema } from '../schemas/auth';

async function validateLoginCredentials(req: Request, res: Response, next: NextFunction) {
  try {
    await LoginCredentialsSchema.parseAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function validateSignupInput(req: Request, res: Response, next: NextFunction) {
  try {
    await SignupCredentialsSchema.parseAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

export default {
  validateLoginCredentials,
  validateSignupInput,
};
