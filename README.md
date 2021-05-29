# 42-Computor-V1

ComputorV1 is a program that solves degree 2 or less equations with rational numbers and coefficients.
### Instalation

```sh
    git clone https://github.com/ayoubyt/ComputorV1.git
```
### usage

```sh
    node computor.js "2 * X^2 + 7 * X + 5 = 2 * X + 2"
```
### Features!

  - It supports a human friendly mathematical synthax
    - All the following formats are supported 
        ```sh
        node computor.js "5 * X^0 + 4 * X^1 - 1 * X^2 = 0"
        node computor.js "5 + 4 * X^1 - 1 * X^2 = 0"
        node computor.js "5 + 4 * X - X^2 = 0"
        node computor.js "5 + 4 * X = X^2"
        ```
### Examples

```sh
node computor.js "5 + 4 * X = X^2"

Equation:  5 + 4 * X = X^2
Reduced form: 5 * X^0 + 4 * X^1 - 1 * X^2 = 0
Polynomial degree: 2
A * X^2 + B * X + C = 0
A = -1 | B = 4 | C = 5
Discriminant Δ = √(B^2 - 4 * A * C)
Discriminant is positive (Δ = 6), there are 2 real solutions:
solution 1: X1 = (- B - Δ) / (2 * A)
solution 2: X2 = (- B + Δ) / (2 * A)
X1 = -10/-2
X2 = 2/-2
5
-1
```

```sh
node computor.js "5 * X^0 + 4 * X^1 = 4 * X^0"
Equation:  5 * X^0 + 4 * X^1 = 4 * X^0
Reduced form: 1 * X^0 + 4 * X^1 = 0
Polynomial degree: 1
A * X + B = 0
Formula: X = - B / A
X = - 1 / 4
The solution is:
-0.25
```

```sh
node computor.js "2 * X = 4 * X - 2 * X"  
Equation:  2 * X = 4 * X - 2 * X
Reduced form: 0 = 0
All solutions are possible.
```
### contributors
    just me :)
