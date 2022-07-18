

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