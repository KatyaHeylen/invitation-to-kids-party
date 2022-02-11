gsap.from("h1", {duration: 0.4, opacity: 0.2, repeat: 300, yoyo: true })

gsap.to("#pawty", {duration: 2, y: -80, scale: 1.3, repeat: 100, yoyo: true});

gsap.to("#portrait", {duration: 2, rotate: 360});


let bone = document.getElementById("bone");

bone.addEventListener("mouseover", () => {
    gsap.to("#bone", {
        duration: 2.5, scale: 1.3, ease: "elastic.out(2.5, 0.1)"})
    })
bone.addEventListener("mouseout", () => {
    gsap.to(
        "#bone", {
            duration: 2.5, scale: 1, ease: "elastic.out(2.5, 0.1)"}
    )
})
