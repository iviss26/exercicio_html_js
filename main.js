const form = document.getElementById("form-number");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const campoUm = document.getElementById("campo-a").value;
    const campoDois = document.getElementById("campo-b").value;
    if (campoDois > campoUm==false) {
        alert("O campo B precisa ser maior do que o campo A");
    } else {
        alert("Está tudo certo");
    }

})
console.log(form);