 


 class Progress {
    constructor(element) {
        this.value = 0;
        this.MAX_VALUE = 100;
        this._element = element;
        this.state = 'normal';
        this._timer = null;
        this.count = 0;
        this.states = ['normal', 'hidden', 'animated'];
    }
    changeProgress (value) {
        const progressValue = (360/this.MAX_VALUE) * value;
        this._element.style.setProperty('--progressValue', progressValue + "deg");
    }
    setHide (type) {
        if (type === 'disable') {
            this._element.classList.remove('hide');
            return;
        }
        this._element.classList.add('hide');
    }
    setAnimate (type) {
        if (type === 'disable') {
            this._element.classList.remove('animate');
            return;
        }
        this._element.classList.add('animate');
    }
    changeState (state, type) {
        switch (state) {
            case 'hidden':
                this.setHide(type)
                break;
            case 'animated':
                this.setAnimate(type)
                break;
        }
    }
    animateSetValue (value) {
        const add = this.count > value ? -this.MAX_VALUE/100 : this.MAX_VALUE/100;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
            if ((this.count >  value && add < 0) || (this.count <  value && add > 0)) {
                this.count +=  add;
                this.changeProgress(this.count);
            }else {
                clearInterval(this.timer);
                this.timer = null;
                this.count = this.value;
            }
        }, 5);
    }
    setValue (value) {
        if (this.state === 'normal') {
            this.animateSetValue(value);
            this.value = +value;
            
        }
        
    }
    setState (value) {
        if (this.states.indexOf(value) != -1){
            this.changeState(this.state, 'disable');
            this.changeState(value);
            this.state = value;
        }

    }
    
}

