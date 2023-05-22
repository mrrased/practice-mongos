import { IUser } from "./user.interface";
import User from "./user.model";

export const craeteUserToDB = async (payload: IUser): Promise<IUser> => {

    const user = new User(payload);

    await user.save();

    return user;
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1 });
    return user;
}

export const getAdminUserFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}

// {
//     id: '87871',
//     role: "17112",
//     password: 'banglan',
//     name: {
//         firstName: 'Rashedur',
//         middleName: 'Rahman',
//         lastName: 'Rony',
//     },
//     gender: "male",
//     contactNo: '014903376534',
//     emergencyContactNo: '0179856745886',
//     presentAddress: 'rampura',
//     permanentAddress: "manikganj",
// }