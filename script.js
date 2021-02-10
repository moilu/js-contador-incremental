const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = counter.getAttribute('data-target');
        //Poner el signo más(+) antes de un valor lo vuelve un número
        const c      = +counter.innerText;

        const increment = target / 2000;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})