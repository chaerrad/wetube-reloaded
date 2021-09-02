const videos = [
    {
        title: "First Video",
        rating: 5,
        commets: 2,
        createdAt: "2 minutes age",
        view: 59,
        id:1
    },
    {
        title: "Second Video",
        rating: 4,
        commets: 3,
        createdAt: "6 minutes age",
        view: 69,
        id:2
    },
    {
        title: "First Video",
        rating: 3,
        commets: 11,
        createdAt: "20 minutes age",
        view: 79,
        id:3
    }
];

export const trending = (req, res) => 
{
    return res.render("home",{pageTitle: "Home",videos});
}

export const watch = (req,res) => {
    const id = req.params.id;
    const video= videos[id-1]
    return res.render("watch",{ pageTitle: `Watching ${video.title}`, video} );
}

export const edit = (req,res) => {
    res.render("edit");
}
export const search = (req,res) => {
    res.send("Search");
}
export const upload = (req,res) => {
    res.send("Upload");
}
export const deleteVideo = (req,res) => {
    res.send("Delete");
}