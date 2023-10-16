const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@notes.gflvaat.mongodb.net/phonebookDB?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

//schema for the db
const phoneBookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Phonebook = mongoose.model('Phonebook', phoneBookSchema)

const phonebook = new Phonebook({
    name: 'Anna',
    number: '040-1234556',
})

phonebook.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
