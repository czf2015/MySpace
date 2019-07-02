@ express : require('express')
@ app : express()

app.get('/:id?', (req, res) => {
	if req.params.id {
		res.send(req.params.id)
	} else {
		res.send('Oh, hello!')
	}
})

app.listen(9000)