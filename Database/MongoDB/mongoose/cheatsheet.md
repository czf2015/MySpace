> Mongoose Cheatsheet

1. Find all users:

```js
User.find((err, users) => {
  console.log(users);
});
```

2. Find a user by email:

```js
let userEmail = 'example@gmail.com';
User.findOne({ email: userEmail }, (err, user) => {
  console.log(user);
});
```

3. Find 5 most recent user accounts:

```js
User
  .find()
  .sort({ _id: -1 })
  .limit(5)
  .exec((err, users) => {
    console.log(users);
  });
```

4. Get total count of a field from all documents:

Let's suppose that each user has a votes field and you would like to count the total number of votes in your database across all users. One very inefficient way would be to loop through each document and manually accumulate the count. Or you could use MongoDB Aggregation Framework instead:

```js
User.aggregate({ $group: { _id: null, total: { $sum: '$votes' } } }, (err, votesCount)  => {
  console.log(votesCount.total);
});
```