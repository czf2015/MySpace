# fib(n) {
  $ a : 0

  for $ b : 1; n > 0; n-- {
    [a, b] : [b, a+b]
  }

  return a;
}

$ input : parseInt(process.argv[2], 10)

process.send({result: fib(input)})