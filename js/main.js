let forma = document.getElementById('MainForm');
forma.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = document.getElementById('name');
    let parol = document.getElementById('parol');

    try {

        let res = await fetch('https://testaoron.limsa.uz/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: name.value,
                password: parol.value
            })
        });
        let data = await res.json();
        if (data?.success) {
            alert("Muvaffaqiyatli kirildi!");
            setTimeout(()=>{
                window.location.href = "/kirish.html";
            },1000);
        } else {
            alert("Login yoki parol noto'g'ri");
        }
    } catch{
        alert("API ma'lumotlari xato!")
    }
});