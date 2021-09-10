import Video from "../midels/Video"

export const home = (req, res) => 
{   
    Video.find({},(error,videos)=>{});
    return res.render("home",{pageTitle: "Home"});
};

export const watch = (req,res) => {
    const id = req.params.id;
    return res.render("watch",{ pageTitle: `Watching`} );
};

export const getEdit = (req,res) => {
    const id = req.params.id;
    return res.render("edit",{pageTitle:`Editing`} );
};
export const postEdit = (req,res) => {
    const id = req.params.id;
    const title = req.body.title;

    return res.redirect(`/videos/${id}`);
};

export const getUpLoad = (req,res) => {
    return res.render("upload",{ pageTitle: "Upload Video" });
};

export const postUpLoad = (req,res) => {
    const {title} = req.body;
    return res.redirect("/");
}