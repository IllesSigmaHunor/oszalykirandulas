const form = document.querySelector("form");
const select = document.getElementById("group");
const row = document.getElementById("fradi")
const rix = document.querySelector(".misi");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    row.classList.add("col-6");
    rix.classList.add("col-6");

    const selectedValue = select.value;
    const buton = document.createElement("button");
    buton.textContent = selectedValue;
    rix.append(buton);
    buton.onclick = function(){
        window.open(
            `https://hu.wikipedia.org/wiki/${selectedValue}`,
            "_blank"
        );
    }

});