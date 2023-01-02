let array1 = [5, 3, 43, 23, 76];
let array2 = [11, 45, 245, 34];
let merge = [];

for (let i = 0; i < array1.length; i++) {
  merge[i] = array1[i];
}
for (let i = 0; i < array2.length; i++) {
  merge[array1.length + i] = array2[i];
}
console.log(merge);
