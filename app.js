const darkModeButton = document.getElementById('mode');
// const mainBox = document.getElementById('box');

let tl = gsap.timeline({defaults: {duration: 1, ease: Back.easeOut.config(2)}})
// animation created here
tl.paused(true);
    tl.to('.dark-mode',{clipPath: 'circle(100% at 50% 9%)', duration: 2})
    tl.to('.box', {background: "none", duration: 1}, "-=2")
    tl.to('*',{color: "#383844", duration: 1}, "-=2")
let state = true;


const darkModeSwitcher = () => {
    state = !state;
    if (!state) {
        tl.play();
        darkModeButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>`;
    } else {
        tl.reverse(.7);
        darkModeButton.innerHTML = `<svg height="24" viewBox="-12 0 448 448.04455" width="24"><path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0"/></svg>`;
    }
}

darkModeButton.addEventListener('click',darkModeSwitcher);