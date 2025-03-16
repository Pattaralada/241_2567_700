const BASE_URL = 'http://localhost:8000'
//1. load user ทั้งหมด จาก api ที่เตรียมไว้
//2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    console.log('user page loaded');
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userTableBody = document.getElementById('userTableBody');
    let htmlData = '';

    // ลูปผ่านข้อมูล user และสร้าง HTML ตาราง
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        htmlData += `
        <tr>
            <td>${user.id}</td>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${Array.isArray(user.interests) ? user.interests.join(", ") : user.interests}</td>
            <td>${user.description || "N/A"}</td>
            <td>
                <a href="index.html?id=${user.id}">
                    <button class="button-edit">Edit</button>
                </a>
                <button class="button-delete" data-id="${user.id}">Delete</button>
            </td>
        </tr>`;
    }

    // เพิ่ม HTML เข้าไปใน tbody ของตาราง
    userTableBody.innerHTML = htmlData;

    //3. ลบ user
    document.querySelectorAll('.button-delete').forEach(button => {
        button.addEventListener('click', async (event) => {
            const id = event.target.dataset.id;
            const confirmDelete = confirm("คุณต้องการลบผู้ใช้นี้หรือไม่?");

            if (confirmDelete) {
                try {
                    await axios.delete(`${BASE_URL}/users/${id}`);
                    loadData(); // โหลดข้อมูลใหม่
                } catch (error) {
                    console.log('error', error);
                }
            }
        });
    });
}