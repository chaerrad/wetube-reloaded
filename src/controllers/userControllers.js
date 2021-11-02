import User from "../models/User";
export const getJoin = (req,res) => {
    res.render("join",{pageTitle: "Join"});
}
export const postJoin = async (req, res) => {
    const { name, username, email, password, location } = req.body;
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
};
export const Edit = (req,res) => {
    res.send("Edit User");
}

export const remove = (req, res) => {
    res.send("Delete Users")
}
export const login = (req,res) => {
    res.send("Login Users");
}
export const logout = (req,res) => {
    res.send("Logout Users");
}
export const see = (req,res) => {
    res.send("See User");
}