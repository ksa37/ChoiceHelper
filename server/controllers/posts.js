import PostSelection from "../models/postSelection.js";

export const getPosts = async (req, res) => {
    try {
        const postSelections = await PostSelection.find();
        
        // console.log(postSelections.sort( { "_id": 1 } ));

        // 200: OK
        res.status(200).json(postSelections);
        console.log("GET works!"); 
    } catch (error) {
        // 404: Not Found
        res.status(404).json({ message: error.message });
        console.log(error.message);
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostSelection(post);

    try {
        await newPost.save();

        // learn more about status codes 
        // at: https://www.restapitutorial.com/httpstatuscodes.html
        // 201: created
        res.status(201).json(newPost);
        console.log("POST DONE! \nAdded data:"); 
        console.log(newPost);
    } catch (error) {
        // 409: Conflict
        res.status(409).json({ message: error.message });
        console.log(error.message);
    }
}

// export const countPosts = async (req, res) => {
//     try {
//         // const postSelections = await PostSelection.find();
//         var query = PostSelection.find();
//         query.count(function (err, count) {
//             if (err) console.log(err)
//             else {
//                 console.log("Count:", count);
//                 res.status(200).json(count);
//             }
//         });
        

//         // console.log(postSelections.count());
//     } catch (error) {
//         // 409: Conflict
//         res.status(409).json({ message: error.message });
//         console.log(error.message);
//     }
// }