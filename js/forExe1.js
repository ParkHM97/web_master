// forExe1.js

//구구단 3단 
// 3 * 1 = 3
// 3 * 2 = 6
// ...
// 3 * 9 = 27
// <table border="2">
// <tr style = "background-color: pink">
//<td>3 * 1</td>
//<td>=</td>
//<td>3<td>
//</tr>
// <tr>
//<td>3 * 2</td>
//<td>=</td>
//<td>6<td>
//</tr>
//</table>

document.write('<table border="2">');

for (let j = 2; j < 10; j++) {
  const num = j; // 2, 3, 4, 5 ... 9
  for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
      document.write(`<tr style="background-color:pink"><td> ${num}  X  ${i}</td><td>=</td><td>  ${num * i}  </td></tr>`);

    } else {
      document.write('<tr style="background-color:skyblue"><td>' + num + ' X ' + i + '</td>' + '<td>=</td>' + '<td>' + num * i + '</td></tr>');

    }
  } // end of for (let i = 1...)
}
document.write('</table>');