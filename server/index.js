const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users =[]

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
app.get('/users', async(req, res) => {
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
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)

    console.log('results', results)
    res.json({
        message: 'Create user successfully',
        data: results[0]
    })
})

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    // ค้นหา user หรือ index ที่ต้องการดึงข้อมูล
    let selectedIndex = users.finfIndex(user => user.id == id)

    res.json(users[selectedIndex])
})

// path = GET /users/:id สำหรับดึง users รายคนออกมา
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectIndex = users.findIndex(user => user.id == id)

        users[selectIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
        users[selectIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
        users[selectIndex].age = updateUser.age || users[selectedIndex].age
        users[selectIndex].gender = updateUser.gender || users[selectedIndex].gender

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    })
})

//path = DELETE /users/:id สำหรับลบ user รายคยตาม id ที่ต้องการ
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectIndex = users.findIndex(user => user.id == id)
    //ลบ user ที่ต้องการ
    users.splice(selectIndex,1)
      res.json({
          message: 'Delete user successfully',
          indexDeleted: selectIndex
      })
})
app.listen(port, async(req, res) => {
    await initMySQL()
    console.log('Http Server is running on' + port);
});