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
  let i = 0;
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
};

Ft_Sort(table);
