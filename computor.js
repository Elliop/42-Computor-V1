let equation = process.argv[2];
console.log("Equation: ", equation);

let tab1 = equation.replaceAll(" ", "");
let tab2 = tab1.replaceAll("-", "+-");
let tab3 = tab2.split("=");
let left = tab3[0]
let right = tab3[1]

Ft_Signe = (tab, signe) => {
    let tab2 =  tab.split("+");

    let i = 0;
    let obj = []
    while (i < tab2.length)
    {
        let tab3 = tab2[i].split("*X^")
        obj = [...obj, {num: tab3[0], exp: tab3[1]}]
        obj[i].num = (parseFloat(obj[i].num) * signe)
        i++;
    }
    return(obj)
}

Ft_Reduced = (tab) => {
    let i = 0;
    while (i < tab.length)
    {
        let j = i + 1;
        while (j <= tab.length)
        {
            if (tab[j] && tab[i].exp == tab[j].exp)
            {
                tab[i].num = (tab[j].num) + (tab[i].num);
                tab.splice(j, 1)
            }
            j++
        }
        i++;
    }
    return(tab)
}

let sr1 = Ft_Signe(left, 1)
let sr2 = Ft_Signe(right, -1)
let table = sr1.concat(sr2)

let test = Ft_Reduced(table)

Ft_Sort = (tab) => {
    let neew = tab.sort(function (a, b){
        return a.exp - b.exp;
    })
    console.log(neew)
    console.log(`Polynomial degree: ${neew[neew.length - 1].exp}`)
/*     let i = 0;
    let str = "";
    while (i < neew.length)
    {
        str = `${str} ${neew[i].num} * X^${neew[i].exp} +`;
        i++;
        console.log(str)
    } */

}

Ft_Sort(table)





































/* let tab =  tab4.split("+");

console.log(tab)


let i = 0;
let obj = []
let ll = []
while (i < tab.length)
{
    let tab2 = tab[i].split("*X^")
    obj = [...obj, {num: tab2[0], exp: tab2[1]}]
    i++;
}

i = 0;

while (i < obj.length)
{
    j = i + 1;
    while (j <= obj.length)
    {
        if (obj[j] && obj[i].exp == obj[j].exp)
        {
            console.log(obj[i].num)
             obj[i].num = parseFloat(obj[j].num) + parseFloat(obj[i].num);
             obj.splice(j,1)
        }
        j++
    }
    obj[i].num = parseFloat(obj[i].num)
    i++;
}


console.log(obj) */

