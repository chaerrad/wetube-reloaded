import Video from "../models/Video";  

/*
console.log("start")
Video.find({},(error,videos) => {
    return res.render("home",{pageTitle: "Home",videos})
})
*/
export const home = async (req,res) => {
    const videos = await Video.find({});
    return res.render("home",{pageTitle: "Home", videos});
}

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

export const postUpLoad = async (req,res) => {
    const {title,description, hashtags} = req.body;
    await Video.create({
        title,
        description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map((word)=>`#${word}`),
        meta: {
            views: 0,
            rating: 0,
        },
    });
    return res.redirect("/");
};