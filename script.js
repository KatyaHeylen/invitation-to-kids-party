let invisibleArea = document.getElementById("invisible");

invisibleArea.addEventListener("mouseover", showBubbles);

invisibleArea.addEventListener("mouseout", hideBubbles);

function showBubbles() {

    let img1 = document.createElement("img");
    document.getElementById("bubble1").appendChild(img1);
    img1.src = "images/bubble1.png";
    img1.setAttribute("class", "bubble1");
    // let bubble2 = document.getElementById("bubble2");
    let img = document.createElement("img");
    img.src = "images/bubble2.png";
    document.getElementById("bubble2").appendChild(img);
    img.setAttribute("class", "bubble2");

}

function hideBubbles() {
        let bubble1 = document.getElementById('bubble1');
        bubble1.removeChild(bubble1.childNodes[0]);
    let bubble2 = document.getElementById('bubble2');
    bubble2.removeChild(bubble2.childNodes[0]);

}