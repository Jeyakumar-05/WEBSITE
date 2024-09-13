function disdetials(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;

    if(name === ""){
        console.log("name field required");
    }else{
        console.log("succes");
    }


    if(age !== 0){
        const value = age > 18  ? "can" : "can't";
        console.log("you "+value+" login");
        }
    

    // alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nGender: ${gender}`);
    const datas = {
        username : name,
        userphone : phone,
        usermail : email,
        userage : age,
        usergender : gender
    }
    const { username, usermail, usergender, userphone ,userage} = datas;
    // alert(username);
    document.getElementById("login").reset(); 
}


data1 = [1,2,3];
data2 = ['j','e','y'];
data3 = [...data1,...data2];
// console.log(data3);

