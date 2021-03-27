const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended: true}))

mongoose
	.connect(
		`mongodb+srv://root:rootadmin@cluster0.w09eq.mongodb.net/Todo?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	)
	.then(() => {
		console.log('Mongodb connected');
	});

app.all('/test', (req, body) => {
	console.log(req.query)
	res.send(req.query);
})

const TodoRoute = require('./Routes/Todo.route');
app.use('/todo', TodoRoute);

app.use((req, res, next) => {
   const err = new Error('Not found');
   error.status = 404;
   next(err);
})

app.use((err, req, res, next) => {
res.status(err.status || 500)
res.send({
    error: {
        status: err.status || 500,
        message: err.message
    }
})
 })


app.listen(5000, () =>{
    console.log('Server started on port 5000 now')
})  