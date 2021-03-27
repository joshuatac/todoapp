const express = require('express');
const Todo = require('../Models/Todo.model');
const router = express.Router();



router.post('/', async (req, res, next) => {

	try {
		const todo = new Todo(req.body);
		const result = await todo.save()
		res.send(result)
	} catch (error) {
		console.log(error.message);
	}
});



//get list of all todo
router.get('/', async (req, res, next) => {
try {
	const results = await Todo.find({}, {__v: 0});
	res.send(results);
} catch (error) {
	console.log(error.message);
}
});


//get todo by id
router.get('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id)
		res.send(todo);
	} catch (error) {
	}
});



router.patch('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const updates = req.body;
		const options = { new: true };
		const result = await Todo.findByIdAndUpdate(id, updates, options);
		res.send(result);
	} catch (error) { 
		console.log(error.message);
	}
});

router.delete('/:id', async (req, res, next) => {
	const id = req.params.id;
	try {
        const result = await Todo.findByIdAndDelete(id);
		res.send(result);
	} catch (error) {
		console.log(error.message);
	}
});

module.exports = router;
