import { Request, Response } from "express";
import User from '../models/user'



export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const  {id}  = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user);
    } else {
    res.json({
        message: 'User not found'
    });
    }
}

export const postUser = async (req: Request, res: Response) => {
    
    const { body }  = req;
    try {
        const user = await User.create(body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json({
            
            message: 'Error creating user'
        });
    }
    
}

export const putUser = async (req: Request, res: Response) => {
    const {id}  = req.params;
    const { body }  = req;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.update(body);
            res.json(user);
        } else {
            res.json({
                message: 'User not found'
            });
        }
    }
    catch (error) {
        res.json({
            message: 'Error updating user'
        });
    }
    res.json({
        msg: "putUser",
        body
    });
}

export const deleteUser = async (req: Request, res: Response) => {
    const {id}  = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({
                message: 'User deleted'
            });
        } else {
            res.json({
                message: 'User not found'
            });
        }
    }
    catch (error) {
        res.json({
            message: 'Error deleting user'
        });
    }
}