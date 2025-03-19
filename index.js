import 'p5'

const setup = () => {
    createCanvas(400, 400);
    background(0);
}

const draw = () => {
    circle(mouseX, mouseY, 80);
}


export default { setup, draw };
