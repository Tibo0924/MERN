const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	company: {
		type: String
	},
	website: {
		type: String
	},
	location: {
		type: String
	},
	status: {
		type: String,
		required: true
	},
	skills: {
		type: [String]
	},
	bio: {
		type: String
	},
	githubusername: {
		type: String
	},
	experience: [
		{
			title: {
				type: String,
				reqired: true
			},
			company: {
				type: String,
				reqired: true
			},
			location: {
				type: String,
			},
			from: {
				type: Date,
				reqired: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			desription: {
				type: String
			}
		}
	],
	education: [
		{
			school: {
				type: String,
				required: true
			},
			degree: {
				type: String,
				required: true
			},
			fieldofstudy: {
				type: String,
				required: true
			},
			from: {
				type: Date,
				reqired: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			desription: {
				type: String
			}
		}
	],
	social: {
		youtube: {
			type: String
		},
		twitter: {
			type: String
		},
		facebook: {
			type: String
		},
		linkedin: {
			type: String
		},
		instagram: {
			type: String
		},
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema)