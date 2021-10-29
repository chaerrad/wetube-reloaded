import Video from "../models/Video";  

/*
console.log("start")
Video.find({},(error,videos) => {
    return res.render("home",{pageTitle: "Home",videos})
})
*/
export const home = async (req,res) => {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home",{pageTitle: "Home", videos});
}

export const watch = async (req,res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", { pageTitle: "Video not found." });
      }
    return res.render("watch",{ pageTitle: video.title, video} );
};

export const getEdit = async (req,res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if (!video) {
      return res.render("404", { pageTitle: "Video not found." });
    }
    return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};
export const postEdit = async (req,res) => {
    const id = req.params.id;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({ _id: id });
    if(!video)
    {
        return res.render("404",{pageTitle: "Video not found"});
    }
    await Video.findByIdAndUpdate(id,{
        title,
        description,
        hashtags: hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`)),
    });

    return res.redirect(`/videos/${id}`);
};

export const getUpLoad = (req,res) => {
    return res.render("upload",{ pageTitle: "Upload Video" });
};

export const postUpLoad = async (req,res) => {
    const {title,description, hashtags} = req.body;
    try{
        await Video.create({
        title,
        description,
        hashtags: hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`)),
    });
    return res.redirect("/");
    }
    catch(error){
        console.log(error);
        return res.render("upload",{
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
        }

        
    };

    export const search = (req, res) => {
        const { keyword } = req.query;
        if (keyword) {
          // search
        }
        return res.render("search", { pageTitle: "Search" });
      };