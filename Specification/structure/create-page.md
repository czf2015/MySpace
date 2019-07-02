# How do I create a new page?

A more correct way to say this would be "How do I create a new route?" The main file app.js contains all the routes. Each route has a callback function associated with it. Sometimes you will see 3 or more arguments to routes. In cases like that, the first argument is still a URL string, while middle arguments are what's called middleware. Think of middleware as a door. If this door prevents you from continuing forward, you won't get to your callback function. One such example is a route that requires authentication.

```js
app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
```

It always goes from left to right. A user visits /account page. Then isAuthenticated middleware checks if you are authenticated:

```js
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
```

If you are authenticated, you let this visitor pass through your "door" by calling return next();. It then proceeds to the next middleware until it reaches the last argument, which is a callback function that typically renders a template on GET requests or redirects on POST requests. In this case, if you are authenticated, you will be redirected to Account Management page, otherwise you will be redirected to Login page.

```js
exports.getAccount = (req, res) => {
  res.render('account/profile', {
    title: 'Account Management'
  });
};
```

Express.js has app.get, app.post, app.put, app.delete, but for the most part you will only use the first two HTTP verbs, unless you are building a RESTful API. `If you just want to display a page, then use GET, if you are submitting a form, sending a file then use POST`.

Here is a typical workflow for adding new routes to your application. Let's say we are building a page that lists all books from database.

- Step 1. Start by defining a route.

```js
app.get('/books', bookController.getBooks);
```

Note: As of Express 4.x you can define you routes like so:

```js
app.route('/books')
  .get(bookController.getBooks)
  .post(bookController.createBooks)
  .put(bookController.updateBooks)
  .delete(bookController.deleteBooks)
```

And here is how a route would look if it required an authentication and an authorization middleware:

```
app.route('/api/twitter')
  .all(passportConfig.isAuthenticated)
  .all(passportConfig.isAuthorized)
  .get(apiController.getTwitter)
  .post(apiController.postTwitter)
```

Use whichever style that makes sense to you. Either one is acceptable. I really think that chaining HTTP verbs on app.route is very clean and elegant approach, but on the other hand I can no longer see all my routes at a glance when you have one route per line.

- Step 2. Create a new schema and a model Book.js inside the models directory.

```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
```

- Step 3. Create a new controller file called book.js inside the controllers directory.

```js
/**
 * GET /books
 * List all books.
 */
const Book = require('../models/Book.js');

exports.getBooks = (req, res) => {
  Book.find((err, docs) => {
    res.render('books', { books: docs });
  });
};
```

- Step 4. Import that controller in app.js.

```js
const bookController = require('./controllers/book');
```

- Step 5. Create books.pug template.

```pug
extends layout

block content
  .page-header
    h3 All Books

  ul
    for book in books
      li= book.name
```

That's it! I will say that you could have combined Step 1, 2, 3 as following:

```js
app.get('/books',(req, res) => {
  Book.find((err, docs) => {
    res.render('books', { books: docs });
  });
});
```

Sure, it's simpler, but as soon as you pass 1000 lines of code in app.js it becomes a little difficult to navigate the file. I mean, the whole point of this boilerplate project was to separate concerns, so you could work with your teammates without running into MERGE CONFLICTS. Imagine you have 4 developers working on a single app.js, I promise you it won't be fun resolving merge conflicts all the time. If you are the only developer then it's fine. But as I said, once it gets up to a certain LoC size, it becomes difficult to maintain everything in a single file.

That's all there is to it. Express.js is super simple to use. Most of the time you will be dealing with other APIs to do the real work: Mongoose for querying database, socket.io for sending and receiving messages over websockets, sending emails via Nodemailer, form validation using express-validator library, parsing websites using Cheerio, and etc.