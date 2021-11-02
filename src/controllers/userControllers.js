export const getJoin = (req,res) => {
    res.render("join",{pageTitle: "Join"});
}
export const postJoin = (req,res) => {
    console.log(req.body);
    res.end();
}
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