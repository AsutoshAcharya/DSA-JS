let data = [5, 64, 3, 2, 443];
let pos = 3;
for (let i = pos; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
