document.getElementById("open").addEventListener("click", function() {
    document.querySelector(".cover").style.transform = "rotateX(180deg)";
    document.querySelector(".heart").style.display = "inline-block";
});

document.getElementById("close").addEventListener("click", function() {
    document.querySelector(".cover").style.transform = "rotateX(0deg)";
    document.querySelector(".heart").style.display = "none";
});
