const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users =[]
let counter = 1

/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข user รายคนตาม id ที่ต้องการ
DELETE /users/:id สำหรับลบ user รายคยตาม id ที่ต้องการ
*/ 

// path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', (req, res) => {
    res.json(users);
})

// path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create new user successfully' ,
        user: user
    });
})

// path = GET /users/:id สำหรับดึง users รายคนออกมา
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    // ค้นหา user ที่ต้องการแก้ไข
    let selectIndex = users.findIndex(user => user.id == id)

    // แก้ไขข้อมูล user
    if (updateUser.firstname) {
        users[selectIndex].firstname = updateUser.firstname
    }
    if (updateUser.lastname) {
        users[selectIndex].lastname = updateUser.lastname
    }

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    })
})

//path = DELETE /users/:id สำหรับลบ user รายคยตาม id ที่ต้องการ
app.delete('/user/:id', (req, res) => {
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
app.listen(port, (req, res) => {
    console.log('Http Server is running on' + port);
});