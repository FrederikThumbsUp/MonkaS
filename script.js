function showResult() {
    document.getElementById("result").style.display = "block";
}

document.getElementById("theme-toggle").addEventListener("click", function() {
    const body = document.body;
    body.classList.toggle("dark-theme"); 
    body.classList.toggle("light-theme");
});
