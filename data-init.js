let UserModel = require('./models/user.model');
let sampleData = {
    firstName: 'Jameer',
    lastName: 'Khan',
    address: 'Noida',
    company: 'R Systems Inc'
}

module.exports = async () => {
    global.mysqlConnection.query(`insert into user values(1, '${sampleData.firstName}', '${sampleData.lastName}', '${sampleData.address}', '${sampleData.company}')`, function (error, results, fields) {
        if (error) throw error;
        console.log('The inserted record is: ', results);
    });

    // mongo
    UserModel.create({
        id: 1,
        firstName: sampleData.firstName,
        lastName: sampleData.lastName,
        address: sampleData.address,
        company: sampleData.company
    }, function () { });
}