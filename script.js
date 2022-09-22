const container = document.querySelector("#container");
const gridItem = document.querySelector(".grid-item");

function changeSize() {
    document.getElementById("container").innerHTML = "";
    let num = prompt("How many pixels you need (max. 100)?", "0");
    let text;
    if (num == null || num == "" || num > 100) {
        alert("You entered wrong number");
    } else {
        makeRows(num, num);
    }
}

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
        let cell = document.createElement("div");
        cell.innerText = c + 1;
        cell.addEventListener("mouseover", changeGridColor);
        container.appendChild(cell).className = "grid-item";
    }
}

function changeGridColor(e) {
    let color = `rgb(${[0, 0, 0]
        .map((channel) => {
            return Math.floor(Math.random() * 256);
        })
        .join(",")
        })`;
    Object.assign(e.target.style, {
        backgroundColor: color,
        opacity: 0.7,
    });
}
