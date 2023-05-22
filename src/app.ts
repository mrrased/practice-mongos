import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express()


import userRoutes from './app/modules/user/user.route'
//using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes)

/*
Interface interface.ts
Schema, Model -> model.ts

route 
route function  -> controller.ts
*/

export default app;
