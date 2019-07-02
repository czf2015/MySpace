package main

import "fmt"

type Callback func(x, y int) int

func test(x, y int, cb Callback) int {
	return cb(x, y)
}

func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(test(3, 4, add))
}
