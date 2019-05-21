// Tell Mongoose about our user model, and its schema
// We have a function called createUser, which accepts the username parameter passed in from the command line and uses it to create a new User entity with a Date which represents when the entity was created
// We have another function called findUser, which finds a single entity in the database whose username matches the username given to it (this prevents us from adding duplicate entries in the database!)
// We connect to MongoDB using the connectionString we defined earlier
// First, we attempt to find the user in the database, if the user does not exist, then we create it and log the user to the console.

const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
const User = mongoose.model('user', userSchema, 'user')
const keys = require("./keys")

async function createUser(username) {
  return new User({
    username,
    created: Date.now()
  }).save()
}

async function findUser(username) {
  return await User.findOne({ username })
}

;(async () => {
  const connector = mongoose.connect(keys.connectionString, {
      useNewUrlParser: true
  })
  const username = process.argv[2].split('=')[1]

  let user = await connector.then(async () => {
    return findUser(username)
  })

  if (!user) {
    user = await createUser(username)
  }

  console.log(user)
  process.exit(0)
})()