if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-mananger-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error("Password cannot contain 'password'")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("Age must be a positive number")
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validator(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is Invalid")
//             }
//         }
//     }
// })

// const mynewuser = new User({
//     name: 'abel',
//     age: 22,
//     email: 'abel@GMAL.COM',
//     password: " password123 "
// })

// mynewuser.save().then(() => {
//     console.log(mynewuser)
// }).catch((error) => {
//     console.log(error)
// })

//tasks 
// const Tasks = mongoose.model("Tasks", {
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const newtask = new Tasks({
//     description: '',
//     completed: true
// })

// newtask.save().then(() => {
//     console.log(newtask)
// }).catch((error) => {
//     console.log(error)
// })


// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//         })
//         console.log('CONNECTED TO DB')
//     } catch (error) {
//         console.error(error)
//     }
// }

// module.exports = connectDB