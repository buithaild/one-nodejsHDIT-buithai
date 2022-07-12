import connection from '../configs/connectDB';

let getHomePage = (req, res) => {
    //simple query
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            res.render('test/index.ejs', { dataUser: JSON.stringify(data) })
        })
}

module.exports = {
    getHomePage
}