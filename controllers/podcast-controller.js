import Podcast from "../model/podcast";

export const getAllPodcasts = async (req, res, next) => {
    let podcasts;
    try {
        podcasts = await Podcast.find();
    } catch (err) {
        return console.log(err)
    }
    if(!podcasts) {
        return res.status(404).json({message: "No Blogs found!" })
    }
    return res.status(200).json(podcasts)
}

export const getPodcast = async (req, res, next) => {
    let podcast;
    const podcastId = req.params.slug;
    try {
        podcast = await Podcast.findOne({slug: podcastId})
    } catch (err) {
        return console.log(err)
    }
    if(!podcast) {
        return res.status(500).json({message: "Unable to find the blog post"})
    }
    return res.status(200).json(podcast)
}

export const addPodcast = async (req, res, next) => {
    const {title, subtitle, audio, image, tags, createdAt} = req.body;
    const podcast = new Podcast({
        title,
        subtitle,
        audio,
        image,
        tags,
        createdAt,
    });
    try {
        await podcast.save()
    } catch (err) {
        return console.log(err)
    }
    return res.status(200).json(podcast)
}

export const updatePodcast = async(req, res, next) => {
    const {title, subtitle, audio, tags} = req.body;
    const podcastId = req.params.slug;
    let podcast;
    try {
        podcast = await Podcast.findOneAndUpdate({slug: podcastId}, {
                title,
                subtitle,
                audio,
                tags,
            })
        } catch (err) {
            return console.log(err)
        }
        if(!podcast) {
            return res.status(500).json({message: "Unable to update the Podcast"})
        }
        return res.status(200).json(podcast)
}

export const deletePodcast = async(req, res, next) => {
    const podcastId = req.params.slug;
    let podcast;
    try {
        podcast = await Podcast.findOneAndDelete({slug: podcastId});
    } catch (err) {
        return console.log(err)
    }
    if(!podcast) {
        return res.status(500).json({message: "Unable to delete the podcast"})
    }
    return res.status(200).json({ message: "Successfully Deleted"})
}