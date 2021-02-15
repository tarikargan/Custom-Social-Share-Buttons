const slc = (el) => {
    return document.querySelector(el);
}
const icons = {
    bars: '<i class="fa fa-bars" aria-hidden="true"></i></i>',
    times: '<i class="fa fa-times" aria-hidden="true"></i></i>'
}

var openmenu = false;

slc('.hamburger').addEventListener('click', function () {
    if (!openmenu) {
        openmenu = true;
        slc('.hamburger').innerHTML = icons.times;
        slc('.navmenu').style.right = '0px';
    } else {
        openmenu = false;
        slc('.hamburger').innerHTML = icons.bars;
        slc('.navmenu').style.right = '-100%';
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 557) {
        slc('.navmenu').style.width = "100%";
        slc('.logo').style.fontSize = `${window.innerWidth > 450 ? '1.3em' : '1em'}`;
        slc('.hamburger').style.fontSize = `${window.innerWidth > 450 ? '2em' : '1.8em'}`;
    } else {
        slc('.navmenu').style.width = "350px";
        slc('.logo').style.fontSize = `1.5em`;
        slc('.hamburger').style.fontSize = `2.3em`;

    }
})



// description main 
// create animaton 
var subTitle = "les Meilleurs services d'un transport rapide et peu couteux";
var output = document.querySelector('.printDescJS');
var mylettre = 0;

var inc = () => {

    const increamentLettre = setInterval(() => {
        if (mylettre < subTitle.length) {
            output.textContent = subTitle.substr(0, mylettre);
            mylettre++;
        } else {
            dec();
            clearInterval(increamentLettre);
        }
    }, 300);
}

var dec = () => {
    const decreamentLettre = setInterval(() => {

        if (mylettre > -1) {
            output.textContent = subTitle.substr(0, mylettre);
            mylettre--;
        } else {
            inc();
            clearInterval(decreamentLettre);
        }
    }, 300);
}

inc();


function Preve(event) {
    event.preventDefault();
}







