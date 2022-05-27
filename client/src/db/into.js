// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'my_db'
// });
// connection.connect();

// function into(a,b,c) {
//     var addSql = 'INSERT INTO user(user_userName,user_pwd,user_phone) VALUES(?,?,?)';
//     var addSqlParams = [a,b,c];
//     //增
//     connection.query(addSql, addSqlParams, function (err, result) {
//         if (err) {
//             console.log('[INSERT ERROR] - ', err.message);
//             return;
//         }
//         console.log('--------------------------INSERT----------------------------');
//         console.log('INSERT ID:', result);
//         console.log('-----------------------------------------------------------------\n\n');
//     });
// }

// export default into;
