// Utilizando o BigInt
let a = BigInt("87387274187407124198748279174891782479188727382738782797418729910921929839183987877197289737281987398176498182");
console.log(a);

// Utilizando n
let b = 83823138721873971937827130091382838172789821003092883728917382797879111290932987482717647163724681795781289128109832019n;
console.log(b);

// Utilizando operadores aritméticos com BigInt
let c = 273172847978172481298n;
let d = 273172847978172481298n;
let e = (c * d);
console.log(e);

// Convertendo BigInt
let f = BigInt("923913927137172381749128784172974187897491784");
let fConvertido = Number(f);
console.log(fConvertido);

// Utilizando método de comparação em BigInt
let g = 100n;
let h = 90n;
let exComparacao = (g === h);
console.log(exComparacao);