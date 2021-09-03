const videos = [
    {
        title: "First Video",
        rating: 5,
        commets: 2,
        createdAt: "2 minutes age",
        view: 1,
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
    return res.render("watch",{ pageTitle: `Watching: ${video.title}`, video} );
}

export const getEdit = (req,res) => {
    const id = req.params.id;
    const video= videos[id-1]
    return res.render("edit",{pageTitle:`Editing: ${video.title}`, video} );
}
export const postEdit = (req,res) => {
    const id = req.params.id;
    const title = req.body.title;

    return res.redirect(`/videos/${id}`);
}