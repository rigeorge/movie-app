const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Movie = mongoose.model("Movie")


router.get("/", (req,res)=>{
    Movie.find()
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
})

router.post("/add", (req,res)=>{
    var movieSchema = new Movie();
    movieSchema.movieTitle = req.body.movieTitle;
    movieSchema.movieGenre = req.body.movieGenre;
    movieSchema.movieDuration = req.body.movieDuration;
    movieSchema.movieRating = req.body.movieRating;
    movieSchema.movieDescription = req.body.movieDescription;
    movieSchema.movieImage = req.body.movieImage;
    movieSchema.movieTrailerUrl = req.body.movieTrailerUrl;
    movieSchema.save((err, doc)=>{
        if(!err) {
            console.log(doc);
            res.status(201).json({ message: "Movie added successfuly" })
        } else {
            res.status(500).json({ message: "Error adding Movie"})
        }
    })
})
module.exports = router;