

function dimensionarAmostra () {
    const n = document.body.querySelector("#n");
    const N = document.body.querySelector("#N");
    const p = document.body.querySelector("#p");
    const q = document.body.querySelector("#q");
    const z = document.body.querySelector("#z");
    const d = document.body.querySelector("#d");

    if(!n.value){
        let dividendo = z.value**2*p.value*q.value*N.value
        let divisor = d.value**2*(N.value-1)+z.value**2*p.value*q.value
        n.value=dividendo/divisor
    }

}

function amplitudeFrequencia (){

    const xmax = document.body.querySelector("#amp_F_Max");
    const xmin = document.body.querySelector("#amp_F_Min");
    const at = document.body.querySelector("#amp_F_Total");
    const n = document.body.querySelector("#amp_F_N");
    const k = document.body.querySelector("#amp_F_K");
    const ac = document.body.querySelector("#amp_F_AC");

    if(!ac.value){
        at.value = parseInt(xmax.value-xmin.value);
        k.value = Math.sqrt(n.value)
        ac.value = parseInt(at.value/k.value)
    }


}