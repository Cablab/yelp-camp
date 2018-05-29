var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var data = [
    {
        name: "Cloud Top",
        image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b201f4cac49215d2be151bb4d5bc454f&auto=format&fit=crop&w=600&q=60",
        description: "In tellus erat, porttitor vel arcu id, placerat porta neque. Nulla tristique consequat lacus, vitae sodales metus sagittis id. In hac habitasse platea dictumst. In quis augue sem. Morbi vitae elementum purus. In magna odio, dictum sed pulvinar eu, hendrerit sed elit. Morbi sit amet sem nisl. Integer a sollicitudin tortor, eget pellentesque neque. Donec vehicula ultricies odio vel dignissim. Cras euismod finibus lacus tempus accumsan. In ultricies sapien quis felis viverra, nec lacinia ligula eleifend. Nam mattis vestibulum bibendum."
    },
    {
        name: "Space Summit",
        image: "https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0f33e637f4bf5e38b990ee05fdcf318&auto=format&fit=crop&w=600&q=60",
        description: "In tellus erat, porttitor vel arcu id, placerat porta neque. Nulla tristique consequat lacus, vitae sodales metus sagittis id. In hac habitasse platea dictumst. In quis augue sem. Morbi vitae elementum purus. In magna odio, dictum sed pulvinar eu, hendrerit sed elit. Morbi sit amet sem nisl. Integer a sollicitudin tortor, eget pellentesque neque. Donec vehicula ultricies odio vel dignissim. Cras euismod finibus lacus tempus accumsan. In ultricies sapien quis felis viverra, nec lacinia ligula eleifend. Nam mattis vestibulum bibendum."
    },
    {
        name: "Forest Dream",
        image: "https://images.unsplash.com/photo-1465695954255-a262b0f57b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06d92f647a2937af54f658e199c3d990&auto=format&fit=crop&w=600&q=60",
        description: "In tellus erat, porttitor vel arcu id, placerat porta neque. Nulla tristique consequat lacus, vitae sodales metus sagittis id. In hac habitasse platea dictumst. In quis augue sem. Morbi vitae elementum purus. In magna odio, dictum sed pulvinar eu, hendrerit sed elit. Morbi sit amet sem nisl. Integer a sollicitudin tortor, eget pellentesque neque. Donec vehicula ultricies odio vel dignissim. Cras euismod finibus lacus tempus accumsan. In ultricies sapien quis felis viverra, nec lacinia ligula eleifend. Nam mattis vestibulum bibendum."
    }
];
    
function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) { console.log(err); }
        console.log("Removed campgrounds");
        
        // Add a few campgrounds (inside the campground to guarantee it runs AFTER removal)
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if (err) { console.log(err); }
        //         else {
        //             console.log("Added a campground");
                    
        //             // Create a comment
        //             Comment.create({
        //                 text: "This place is great, but I wish there was internet!",
        //                 author: "Homer"
        //             }, function(err, comment) {
        //                 if (err) { console.log(err); }
        //                 else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created new comment");
        //                 }
        //             });
        //         }
        //     });
        // });
    });
}    
    
module.exports = seedDB;