const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

let users = []

let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}

/*
app.get('/testdb', (req, res) => {
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    }).then((conn) => {
        conn
        .query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0])
        })
        .catch((error) => {
            console.log('error', error.message)
            res.status(500).json({error: 'ERROR fetching users'})
        })
    })
})
*/

/*
app.get('/testdbnew', async (req, res) => {
    try {
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])
    } catch (error) {
        console.log('error', error.message)
        res.status(500).json({error: 'ERROR fetching users'})
    }       
})
*/

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข user รายคนตาม id ที่ต้องการ
DELETE /users/:id สำหรับลบ user รายคยตาม id ที่ต้องการ
*/

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async (req, res) => {
    /*const filterUsers = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.firstname + ' ' + user.lastname
        }
    })
    res.json(filterUsers)
    */
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
})

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {

    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user)
        res.json({
            message: 'Create user successfully',
            data: results[0]
        })
    } catch (error) {
        console.log('error', error.message)
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
})

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
        if (results[0].length == 0) {
            throw { statusCode: 404, message: 'User not found' }
        }
        res.json(results[0][0])
    } catch (error) {
        console.log('error', error.message)
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
})

// path = GET /users/:id สำหรับดึง users รายคนออกมา
app.put('/users/:id', async (req, res) => {
    try{
       let id = req.params.id;
       let updateUser = req.body;
       const results = await conn.query(
           'UPDATE users SET ? WHERE id = ?', 
           [updateUser, id]    
       )
       res.json({
           message: 'Update user successfully',
           data: results[0]
       })
   }catch(error){
       console.error('error: ', error.message)
       res.status(500).json({
           message: 'something went wrong',
           errorMessage: error.message
       })
   }  
})

//path = DELETE /users/:id สำหรับลบ user รายคยตาม id ที่ต้องการ
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE from users WHERE id = ?', id)    
        res.json({
            message: 'Delete user successfully',
            data: results[0]
        })
    } catch (error) {
        console.log('error', error.message)
        res.status(500).json({
            message: 'Something went wrong',
            errorMessage: error.message
        })
    }
    
})
app.listen(port, async (req, res) => {
    await initMySQL()
    console.log('Http Server is running on' + port);
});