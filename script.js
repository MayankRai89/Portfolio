function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function (elem) {

        //  create two spans
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");

        // parent and child both set their respective classes
        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        // span parents gets child and child gets elem detail
        spanChild.innerHTML = elem.textContent;
        spanParent.appendChild(spanChild);

        // elem replaces its value with parent span
        elem.innerHTML = "";
        elem.appendChild(spanParent);

    })
}
revealToSpan();

let tl = gsap.timeline();
tl
    .from(".child span", {
        x: 100,
        stagger: .2,
        duration: 1.4,
        ease: Power3. easeInOut
    })
    .to(".parent .child", {
        y: "-100%",
        durarion: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
       height: 0,
        durarion: 1,
        ease: Circ.easeInOut
    })
    .to("#green", {
       height: "100%",
       top: 0,
        durarion: 1,
        delay:-.8,
        ease: Circ.easeInOut
    })
    .to("#green", {
       height: "0%",
        durarion: 1,
         delay:-.4,
        ease: Circ.easeInOut
    })
