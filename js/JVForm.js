function kiemtra(){
    //First Name
    var sFirst = document.getElementById("txtFirst").value;
    var reFirst = /^[A-Za-z ]+$/;
    if(!reFirst.test(sFirst)){ //(reName.test(sName) == false) | (reName.test(sName) != true)
       alert("First name can't left blank!");
       document.getElementById("txtFirst").focus();
       return false;
    }
    //Last Name
    var sLast = document.getElementById("txtLast").value;
    var reLast = /^[A-Za-z ]+$/;
    if(!reLast.test(sLast)){ //(reName.test(sName) == false) | (reName.test(sName) != true)
       alert("Last name can't left blank!");
       document.getElementById("txtLast").focus();
       return false;
    }
    //Email
    var sMail = document.getElementById("txtMail").value;
    var reMail = /^\w+[@]\w+[.]\w{3}([.]\w{2})?$/;
    if(!reMail.test(sMail)){
        alert("Email is required or Invalid!");
        document.getElementById("txtMail").focus();
        return false;
    }
    //Phone
    var sPhone = document.getElementById("txtPhone").value; //prompt("Enter your phone number: ")
    var rePhone = /^\d{8,12}$/;
        if(!rePhone.test(sPhone)){
            alert("Phone is digit only");
            document.getElementById("txtPhone").focus();
            return false;
        }  
    thongbao();
    return false;
}
function thongbao(){
    alert("Congratulation!!! Your information has been sent successfully!!!")
    window.location.href="./index.html";
}