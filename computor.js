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
  return neew;
};

Ft_Racine = (n) => {
  if (n == 0) return 0;
  let min = 1;
  let max = 1;
  let mid;
  while (max * max < n) {
    max++;
  }
  min = max - 1;
  mid = (max + min) / 2;
  while (mid * mid != n) {
    if (mid * mid > n) {
      max = mid;
    } else {
      min = mid;
    }
    if (mid == (max + min) / 2) {
      break;
    }
    mid = (max + min) / 2;
  }
  return mid;
};

Ft_Deg0 = (tab) => {
  let i = 0;
  let num = 0;
  while (i < tab.length) {
    num = num + tab[i].num;
    i++;
  }
  if (num == 0) {
    console.log("\x1b[31m%s\x1b[0m", `${num} == 0`);
    console.log("\x1b[42m%s\x1b[0m", `All solutions are possible.`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `${num} != 0`);
    console.log("\x1b[31m%s\x1b[0m", `There is no solution.`);
  }
};

Ft_Deg1 = (tab) => {
  console.log(`A * X + B = 0`);
  console.log(`Formula: X = - B / A`);
  console.log("\x1b[35m%s\x1b[0m", `X = - ${tab[0].num} / ${tab[1].num}`);
  let num = (-1 * tab[0].num) / tab[1].num;
  console.log("\x1b[31m%s\x1b[0m", `The solution is:\n${num}`);
  console.log("\x1b[42m%s\x1b[0m", `${num}`);
};

Ft_Deg2 = (tab) => {
  let a = tab[2].num;
  let b = tab[1].num;
  let c = tab[0].num;
  let d = 0;
  let sol1, sol2, bb, dd;
  console.log(`A * X^2 + B * X + C = 0`);
  console.log("\x1b[35m%s\x1b[0m", `A = ${a} | B = ${b} | C = ${c}`);
  d = b * b - 4 * a * c;
  if (d > 0) {
    d = Ft_Racine(d);
    console.log("\x1b[33m%s\x1b[0m", `Discriminant Δ = √(B^2 - 4 * A * C)`);
    console.log(
      `Discriminant is positive (Δ = ${d}), there are 2 real solutions:`
    );
    console.log("\x1b[34m%s\x1b[0m", `solution 1: X1 = (- B - Δ) / (2 * A)`);
    console.log("\x1b[34m%s\x1b[0m", `solution 2: X2 = (- B + Δ) / (2 * A)`);
    let s1 = -1 * b - d;
    let s2 = -1 * b + d;
    let s3 = 2 * a;
    console.log("\x1b[31m%s\x1b[0m", `X1 = ${s1}/${s3}`);
    console.log("\x1b[31m%s\x1b[0m", `X2 = ${s2}/${s3}`);

    sol1 = (-1 * b - d) / (2 * a);
    sol2 = (-1 * b + d) / (2 * a);
    console.log("\x1b[42m%s\x1b[0m", sol1);
    console.log("\x1b[42m%s\x1b[0m", sol2);
  } else if (d === 0) {
    d = Ft_Racine(d);
    console.log("\x1b[33m%s\x1b[0m", `Discriminant Δ = √(B^2 - 4 * A * C)`);
    console.log(`Discriminant = zero (Δ = ${d}), there is one real solution:`);
    console.log("\x1b[34m%s\x1b[0m", `solution: X = (- B) / (2 * A)`);
    sol1 = (-1 * b) / (2 * a);
    console.log("\x1b[31m%s\x1b[0m", `X = ${-1 * b}/${2 * a}`);
    console.log("\x1b[42m%s\x1b[0m", sol1);
  } else {
    d = d * -1;
    d = Ft_Racine(d);
    console.log("\x1b[33m%s\x1b[0m", `Discriminant Δ = √(B^2 - 4 * A * C)`);
    console.log(
      `Discriminant is negative (Δ = ${-1 * d}), there are 2 complex solutions:`
    );
    console.log(
      "\x1b[34m%s\x1b[0m",
      `solution 1: X1 = (- B - i * (-Δ)) / (2 * A)`
    );
    console.log(
      "\x1b[34m%s\x1b[0m",
      `solution 2: X2 = (- B + i * (-Δ)) / (2 * A)`
    );
    bb = (-1 * b) / (2 * a);
    dd = d / (2 * a);
    console.log("\x1b[42m%s\x1b[0m", `${bb} - ${dd} * i`);
    console.log("\x1b[42m%s\x1b[0m", `${bb} + ${dd} * i`);
  }
};

Ft_DegMore = () => {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `The polynomial degree is stricly greater than 2, I can't solve.`
  );
};

let equation = process.argv[2];
if (process.argv.length == 3) {
  console.log("Equation: ", equation);
  let tab1 = equation.replaceAll(" ", "");
  let tab2 = tab1.replaceAll("-", "+-");
  let tab3 = tab2.split("=");
  let left = tab3[0];
  let right = tab3[1];

  let sr1 = Ft_Signe(left, 1);
  let sr2 = Ft_Signe(right, -1);

  let table = sr1.concat(sr2);
  table = Ft_Reduced(table);

  let reduced = Ft_Sort(table);
  let degree = reduced[reduced.length - 1].exp;

  if (degree == 0) {
    Ft_Deg0(reduced);
  } else if (degree == 1) {
    Ft_Deg1(reduced);
  } else if (degree == 2) {
    Ft_Deg2(reduced);
  } else {
    Ft_DegMore();
  }
} else console.log("\x1b[31m%s\x1b[0m", "Syntax ERROR");
