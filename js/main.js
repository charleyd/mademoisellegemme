class Test {
    constructor() {
        this.dom = {};
        this.dom.el = document.querySelector('.home_categories');
        this.dom.images = this.dom.el.querySelectorAll('.card');
    }

    setHoverAnimation(){
        console.log("init ok")
    }

    init() {
        this.setHoverAnimation();
    }
}

const test = new Test();
test.init();

console.log("✅ main.js est ok");