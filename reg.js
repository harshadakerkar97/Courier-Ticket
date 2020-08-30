let registerHere = () => {
    uname = $("#uname").val();
    email = $("#email").val();
    cont = $("#phone").val();
    pass = $("#pass").val();
    terms = $("#terms").val();
    if (uname == "" || email == "" || cont == "" || terms == "") {

        alert("Please fill all the details!!!!!");

    }
    else {
        alert("success!!!!");
    }
    console.log(uname);
}