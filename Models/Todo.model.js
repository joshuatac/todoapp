const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	title: { type:String, required: true, trim: true, minLength: 10, maxLength: 100 },
	description: {
		type:String,
		required: true,
		trim: true,
		minLength: 10,
		maxLength: 300,
	}
}, {timestamp: true});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
