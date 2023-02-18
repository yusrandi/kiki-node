const {db} = require('./config/database.js');
const express = require("express");
const cors = require('cors')
const app = express();
const UserModel = require('./models/user_model.js')
const AbsenModel = require('./models/absen_model')
const UserRoutes = require('./routes/user_routes')
const AbsenRoutes = require('./routes/absen_routes')

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const response = await AbsenModel.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }    
});

app.use(UserRoutes);
app.use(AbsenRoutes);


app.listen(5005, () => {
    console.log(`server up and running 5005`);
})

