import { NextFunction, Request, Response } from "express";
import { craeteUserToDB, getAdminUserFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;
    const user = await craeteUserToDB(data);

    res.status(200).json({
        status: "success",
        data: user,
    })
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB();

    res.status(200).json({
        status: "success",
        data: user,
    })
};
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await getUserByIdFromDB(id);

    res.status(200).json({
        status: "success",
        data: user,
    })
};

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUserFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })
};




// Pettern

// Route --> controller --> service