import PostSelection from "../models/postSelection.js";

export const getPosts = async (req, res) => {
    try {
        const postSelections = await PostSelection.find();
        
        console.log(postSelections);

        // 200: OK
        res.status(200).json(postSelections);
    } catch (error) {
        // 404: Not Found
        res.status(404).json({ message: error.message });
    }
    res.send("GET works!");
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostSelection(post);

    try {
        await newPost.save();

        // learn more about status codes 
        // at: https://www.restapitutorial.com/httpstatuscodes.html
        // 201: created
        res.status(201).json(postSelections);
    } catch (error) {
        // 409: Conflict
        res.status(409).json({ message: error.message });
    }
    res.send("GET works!");
}