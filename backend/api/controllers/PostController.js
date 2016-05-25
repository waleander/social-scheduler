/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	tweet: function (req, res) {

		User.findOne(req.userId, function (err, user) {

			var message = req.body.message;
			var datetime = req.body.scheduledfor;

			Post.create({
				message: message,
				scheduledfor: datetime,
				isPosted: false,
				owner: req.userId
			}).exec(function (err, post) {
				console.log("working", post, err);
				res.status(200).end();
			})
		})
	},
	myPosts: function (req, res) {
		 Post.find({owner: req.userId}, function(err,posts){
			  res.json(posts);
		 })
	}

};