const connection = require('../config/db');



const getHomePage = (req,res) => {
    // let user = [];
    // connection.query('SELECT * FROM users', function(error, results, fields) {
    //     user = results;
    //     if(error)
    //         throw error;
    //     console.log("Home check", results);
    // });
    // res.render('sample.ejs')
    return res.render('home.ejs')
}

const createUser = (req,res) => {
    console.log(req.body);
    return res.send('Create successful')
}


module.exports = {
    getHomePage,createUser
}