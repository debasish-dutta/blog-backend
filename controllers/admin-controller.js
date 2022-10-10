import User from "../model/admin";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
};

export const login = async (req, res, next) => {
    let userAdmin = "admin";
    let userPass = "123";
    const { username, password } = req.body;
    // try {
    //     userAdmin = await User.findOne({ username });
    // } catch (err) {
    //     return console.log(err)
    // }
    if (!userAdmin) {
        return res.status(404).json({ message: "Could not find user!" });
    }

    if( password != userPass) {
        return res.status(400).json({ message: "Incorrect Password" })
    } else {
        return res.status(200).json({ message: "Login Successfull" })
    }

        // return res.status(200).json({username, password});
};