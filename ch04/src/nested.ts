const calc = (value: number, cd: (arg0: number) => void): void => {
  let add = (a: any, b: any) => a + b;
  function multiply(a: any, b: any) {return a*b}

  let result = multiply(add(1,2), value)
  cd(result)
}
calc(30, (result: number) => console.log(`result is ${result}`))