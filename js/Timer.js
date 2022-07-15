export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

    this.el = {
        hours: root.querySelector(".timer__part--hours"),
        minutes: root.querySelector(".timer__part--minutes"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
    };
        this.interval = null;
        this.remainingSeconds = 3687;
        this.updateInterfaceTime();

        this.el.control.addEventListener("click", () => {
            //add
        });

        this.el.reset.addEventListener("click", () => {
            //add
        });
    }
    
    updateInterfaceTime() {
        const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
        const seconds = this.remainingSeconds % 60;
        const hours = Math.floor(this.remainingSeconds / 3600);

        console.log(hours, minutes, seconds);
    }


static getHTML() {
    return `
    <span class = "timer__part timer__part--hours">00</span>
	<span class = "timer__part">:</span>
	<span class = "timer__part timer__part--minutes">00</span>
    <span class = "timer__part">:</span>
	<span class = "timer__part timer__part--seconds">00</span>
	<button type="button" class ="timer__btn timer__btn--control timer__btn--start">
		<span class="material-icons">play_arrow</span>
	</button>
	<button type="button" class ="timer__btn timer__btn--reset">
		<span class="material-icons">timer</span>
	</button>
    `
};
}