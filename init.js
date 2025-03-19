import p5Methods from "./index"

window.setup = p5Methods.setup;
window.draw = p5Methods.draw;

if (p5Methods.preload !== undefined) {
    window.preload = p5Methods.preload
}