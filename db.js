/*
 * @Author: Haitai
 * @Date:   2016-10-18 11:56:42
 * @Last Modified by:   Haitai
 * @Last Modified time: 2016-10-18 12:13:43
 */

'use strict';
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ace_admin'
});
module.exports = pool;
