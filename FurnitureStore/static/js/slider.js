class Slider {
    constructor(options) {
        this.currentSlide = 0;
        this.autoSlide = options.autoSlide;
        this.delay = options.delay;
        this.loop = options.loop;
        this.stopMouseHover = options.stopMouseHover;
        this.slider = document.getElementById('slider');
        this.slides = this.slider.querySelectorAll('.slide');
        this.slideCount = this.slides.length;
        this.counter = document.getElementById('counter');
        this.pagination = document.getElementById('pagination');
        this.navs = document.getElementById('navs');
        this.autoCheckbox = document.getElementById('auto');
        this.delayInput = document.getElementById('delay');
        this.loopCheckbox = document.getElementById('loop');
        this.navsToggle = document.getElementById('navsToggle');
        this.pagsToggle = document.getElementById('pagsToggle');
        this.stopMouseHoverCheckbox = document.getElementById('stopMouseHover');
        this.autoSlideInterval = null;

        this.init();
    }

    init() {
        this.updateSlider();
        this.autoPlay();
        this.addEventListeners();
    }

    updateSlider() {
        document.querySelector('.slides').style.transform = `translateX(-${this.currentSlide * 100}%)`;
        this.counter.textContent = `${this.currentSlide + 1}/${this.slideCount}`;
        document.querySelectorAll('.pagination button').forEach((btn, index) => {
            btn.classList.toggle('active', index === this.currentSlide);
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        if (!this.loop && this.currentSlide === 0) this.currentSlide = this.slideCount - 1;
        this.updateSlider();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        if (!this.loop && this.currentSlide === this.slideCount - 1) this.currentSlide = 0;
        this.updateSlider();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }

    autoPlay() {
        if (this.autoSlide) {
            this.autoSlideInterval = setInterval(() => this.nextSlide(), this.delay);
        }
    }

    stopAutoPlay() {
        clearInterval(this.autoSlideInterval);
    }

    addEventListeners() {
        this.autoCheckbox.addEventListener('change', () => {
            this.autoSlide = this.autoCheckbox.checked;
            if (this.autoSlide) {
                this.autoPlay();
            } else {
                this.stopAutoPlay();
            }
        });

        this.delayInput.addEventListener('input', () => {
            this.delay = this.delayInput.value * 1000;
            if (this.autoSlide) {
                this.stopAutoPlay();
                this.autoPlay();
            }
        });

        this.loopCheckbox.addEventListener('change', () => {
            this.loop = this.loopCheckbox.checked;
        });

        this.navsToggle.addEventListener('change', () => {
            this.navs.style.display = this.navsToggle.checked ? 'flex' : 'none';
        });

        this.pagsToggle.addEventListener('change', () => {
            this.pagination.style.display = this.pagsToggle.checked ? 'block' : 'none';
        });

        this.stopMouseHoverCheckbox.addEventListener('change', () => {
            this.stopMouseHover = this.stopMouseHoverCheckbox.checked;
        });

        this.slider.addEventListener('mouseenter', () => {
            if (this.stopMouseHover && this.autoSlide) {
                this.stopAutoPlay();
            }
        });

        this.slider.addEventListener('mouseleave', () => {
            if (this.stopMouseHover && this.autoSlide) {
                this.autoPlay();
            }
        });

        document.getElementById('next').addEventListener('click', () => this.nextSlide());
        document.getElementById('prev').addEventListener('click', () => this.prevSlide());

        document.querySelectorAll('.pagination button').forEach((btn, index) => {
            btn.addEventListener('click', () => this.goToSlide(index));
        });
    }
}

// Initialize the slider
const slider = new Slider({
    autoSlide: true,
    delay: 5000,
    loop: true,
    stopMouseHover: true
});