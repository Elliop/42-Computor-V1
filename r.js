let min = 1
let max = 1
let n = 82
while (max * max < n)
{
    max++
}
min = max - 1
mid = (max  + min) /2
while (mid * mid != n)
{
    if(mid * mid  > n)
    {
        max = mid
    } else {
        min = mid
    }
    if (mid == (max  + min) /2){
        break
    }
    mid = (max  + min) /2
    
    
}
console.log(mid)