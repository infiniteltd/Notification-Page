const readNot = document.querySelectorAll(".unread");
const dot = document.querySelectorAll(".dot")
const alert = document.getElementById("alert");
const mark = document.getElementById("mark");

let count = 0;
readNot.forEach (() => {
    count += 1;
})

readNot.forEach(e => e.addEventListener ("click" , () => {
    if (e.classList.contains ("unread")) {
        e.classList.remove("unread");
        e.lastElementChild.firstElementChild.lastElementChild.classList.remove("dot");

        if (count > 0) {
            count -= 1;
            alert.innerHTML = count;
        }
    }
}))

mark.addEventListener("click" , () => {
    readNot.forEach(e => e.classList.remove("unread"));
    dot.forEach(dot => dot.classList.remove("dot"));
    alert.innerHTML = 0;
})