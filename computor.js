let equation = process.argv[2];
console.log("Equation: ", equation);

let tab1 = equation.replaceAll(" ", "");
let tab2 = tab1.replaceAll("-", "+-");
let tab3 = tab2.split("=");
let left = tab3[0];
let right = tab3[1];

Ft_Signe = (tab, signe) => {
  let tab2 = tab.split("+");
  let i = 0;
  let obj = [];
  while (i < tab2.length) {
    let tab3 = tab2[i].split("*X^");

    if (!tab3[0]) {
      tab3[0] = 1;
    }
    if (!tab3[1]) {
      tab3[1] = 0;
    }

    obj = [...obj, { num: tab3[0], exp: tab3[1] }];
    if (obj[i].num == `X^${obj[i].exp}`) {
      obj[i].num = 1;
    }
    obj[i].num = parseFloat(obj[i].num) * signe;
    obj[i].exp = parseFloat(obj[i].exp);
    i++;
  }
  return obj;
};

Ft_Reduced = (tab) => {
  let i = 0;
  while (i < tab.length) {
    let j = i + 1;
    while (j <= tab.length) {
      if (tab[j] && tab[i].exp == tab[j].exp) {
        tab[i].num = tab[j].num + tab[i].num;
        tab.splice(j, 1);
      }
      j++;
    }
    i++;
  }
  return tab;
};

let sr1 = Ft_Signe(left, 1);
let sr2 = Ft_Signe(right, -1);
let table = sr1.concat(sr2);
let test = Ft_Reduced(table);

Ft_Sort = (tab) => {
  let neew = tab.sort(function (a, b) {
    return a.exp - b.exp;
  });
  let eq = "";
  neew.map((e) => {
    if (e.num >= 0) {
      if (!eq) {
        eq = `${e.num} * X^${e.exp}`;
      } else {
        eq = `${eq} + ${e.num} * X^${e.exp}`;
      }
    } else {
      if (!eq) {
        eq = `${e.num} * X^${e.exp} `;
      } else {
        eq = `${eq} - ${e.num * -1} * X^${e.exp}`;
      }
    }
  });
  console.log("\x1b[36m%s\x1b[0m", `Reduced form: ${eq} = 0`);
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Polynomial degree: ${neew[neew.length - 1].exp}`
  );
  return (neew)
};

let reduced = Ft_Sort(table);
let degree = reduced[reduced.length - 1].exp;
/* console.log(reduced)
console.log(`degree: ${degree}`) */

Ft_Deg0 = (tab) => {
    let i = 0
    let num = 0
    while (i < tab.length)
    {
        num = num + tab[i].num;
        i++;
    }
    if (num == 0)
    {
        console.log("\x1b[31m%s\x1b[0m", `${num} == 0`)
        console.log("\x1b[31m%s\x1b[0m", `All solutions are possible.`)
    }
    else 
    {
        console.log("\x1b[31m%s\x1b[0m", `${num} != 0`)
        console.log("\x1b[31m%s\x1b[0m", `There is no solution.`)
    }
}
Ft_Deg1 = () => {
    console.log(`deg 1`)
}
Ft_Deg2 = () => {
    console.log(`deg 2`)
}
Ft_DegMore = () => {
    console.log(`The polynomial degree is stricly greater than 2, I can't solve.`)
}

if (degree == 0)
{
    Ft_Deg0(reduced)
}
else if (degree == 1)
{
    Ft_Deg1(reduced)
}
else if (degree == 2)
{
    Ft_Deg2(reduced)
}
else
{
    Ft_DegMore(reduced)
}