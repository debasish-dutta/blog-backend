import Blog from "../model/blog";

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        return console.log(err)
    }
    if(!blogs) {
        return res.status(404).json({message: "No Blogs found!" })
    }
    return res.status(200).json(blogs)
}

export const getBlogPost = async (req, res, next) => {
    let post;
    const blogId = req.params.id;
    try {
        post = await Blog.findById(blogId)
    } catch (err) {
        return console.log(err)
    }
    if(!post) {
        return res.status(500).json({message: "Unable to find the blog post"})
    }
    return res.status(200).json(post)
}

export const addBlog = async (req, res, next) => {
    const {title, subtitle, content, image, tags, createdAt} = req.body;
    const blog = new Blog({
        title,
        subtitle,
        content,
        image,
        tags,
        createdAt,
    });
    try {
        await blog.save()
    } catch (err) {
        return console.log(err)
    }
    return res.status(200).json(blog)
}

export const updateBlog = async(req, res, next) => {
    const {title, subtitle, content, tags} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
            blog = await Blog.findByIdAndUpdate(blogId, {
                title,
                subtitle,
                content,
                tags,
            })
        } catch (err) {
            return console.log(err)
        }
        if(!blog) {
            return res.status(500).json({message: "Unable to update the blog"})
        }
        return res.status(200).json(blog)
}

export const deletePost = async(req, res, next) => {
    const blogId = req.params.id;
    let post;
    try {
        post = await Blog.findByIdAndDelete(blogId);
    } catch (err) {
        return console.log(err)
    }
    if(!post) {
        return res.status(500).json({message: "Unable to delete the blog post"})
    }
    return res.status(200).json({ message: "Successfully Deleted"})
}