var express     = require("express"),
    Campground  = require("../models/campground"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware"),
    router      = express.Router({mergeParams: true});

// NEW route
router.get("/new", middleware.isLoggedIn, function(req, res) {
    // Find campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if (err) { console.log(err); }
        else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// CREATE route
router.post("/", middleware.isLoggedIn, function(req, res) {
    // Lookup campground using id
    Campground.findById(req.params.id, function(err, campground) {
        if (err) { 
            console.log(err); 
            res.redirect("/campgrounds");
        }
        else {
            // Create a comment
            Comment.create(req.body.comment, function(err, comment) {
                if (err) { 
                    req.flash("error", "Something went wrong");
                    console.log(err); 
                }
                else {
                    // Add username and ID to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    // Save the comment
                    comment.save();
                    // Associate comment with current campground
                    campground.comments.push(comment);
                    campground.save();
                    // Redirect to current campground show page
                    req.flash("success", "Successfully created a comment");
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

// EDIT route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err || !foundCampground) {
            req.flash("error", "Campground not found");
            return res.redirect("back");
        }
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if (err) {
                res.redirect("back");
            }
            else {
                res.render("comments/edit", {campground_id: req.params.id, comment: foundComment });
            }
        });
    });
});

// UPDATE route
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
        if (err) {
            res.redirect("back");
        }
        else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// DESTROY route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if (err) {
            res.redirect("back");
        }
        else {
            req.flash("success", "Comment deleted");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


module.exports = router;