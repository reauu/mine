let grades = {
    math: 97,
    sci: 96,
    eng: 95,
    fil: 96,
    com: 97
}
let ave = 0;

for (let k in grades) {
    console.log(`${k}: ${grades[k]}`);
    ave += grades[k];
}

ave /= Object.keys(grades).length;
console.log(`Average : ${ave}`)