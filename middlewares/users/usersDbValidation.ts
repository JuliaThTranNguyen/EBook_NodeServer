/*
author:hientran -julia.th
description: validate user params & body 
*/
import { NextFunction, Request, Response, json } from 'express';
import { UserApiError } from '../../errors/UserApiError';
import { getAllUsers } from '../../db/usertools';
import { z } from 'zod';

const UserDtoSchema = z.object({
  id: z.string().default(''),
  username: z.string({ required_error: 'Please provide username' }).min(2).max(50),
  password: z.string({ required_error: 'Please provide password' }).min(6),
  firstName: z.string({ required_error: 'Please provide first name' }).min(2).max(50),
  lastName: z.string({ required_error: 'Please provide last name' }).min(2).max(50),
  email: z.string({ required_error: 'Please provide email' }).refine((email) => {
    // Custom email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, 'Invalid email format'),
  role: z.enum(['admin', 'user']).default('user'),
  imgUrl: z.string().url({ message: 'Invalid URL format' }).default(''), // This can be empty - Valid URL format
  jwtToken: z.string().default(''), // Leave as empty - This can be automatically generated by the server
  refreshToken: z.string().default(''), // Leave as empty - This can be automatically generated by the server
});

const UserIdParamSchema = z.object({
  id: z.string().refine(async (id) => {
    const users = await getAllUsers();
    // Check if the provided user ID exists in the database
    const userExists = users.some((user) => user.id === id);
    return userExists;
  }, 'Invalid user ID format'),
});

async function validateUserDtoInput(
    err: typeof UserApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
    if (err instanceof UserApiError){
        console.error("Middleware: Api Errors is working !")
        res.status(err.code).json({msg: err.message})
        try {
            await UserDtoSchema.parseAsync(req.body);
            next();
          } catch (error) {
            res.status(400).json(error);
          }
        return
      }
        console.log("Middleware: Api Errors is not working properly !");
        res.status(500).json({mgs: "Internal server error."});
}

async function validateUserIdParam(
  err: typeof UserApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof UserApiError){
    console.error("Middleware: Api Errors is working !")
    res.status(err.code).json({msg: err.message})
    try {
      await UserIdParamSchema.parseAsync(req.params);
      next();
    } catch (error) {
      res.status(400).json(error);
    }
    return
  }
    console.log("Middleware: Api Errors is not working properly !");
    res.status(500).json({mgs: "Internal server error."});

}

export default {
  validateUserDtoInput, validateUserIdParam
};