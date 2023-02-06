const A = [1, 1, 2, 3];
const B = [3, 4, 5];

const C = A.filter((el) => B.findIndex((e) => e === el));
const D = [...new Set(A.concat(B))];
console.log(C);
console.log(D);
