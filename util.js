$("#btnSubmit").on("click", function () {
    $('#firstName').val("");
    $('#lastName').val("");
    $('#subject').val("");
    $('#message').val("");
    $('#email').val("");

    alert("Thank you for contacting me!");
    window.location.href ='index.html';
});