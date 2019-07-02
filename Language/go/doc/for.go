package main

import "fmt"

func main() {
	sum := 0
	/**
	 * for：
	 * 
	 * Go 只有一种循环结构——`for`循环。
	 * 基本的 for 循环没有`( )`（甚至强制不能使用它们），而`{ }`是必须的。
	 */
	for sum = 1, i := 0; i < 10; i++ {
		sum += i
	}
	/**
	 * for 是 Go 的 “while”：
	 * 可以让前置、后置语句为空，基于此可以省略分号。
	 */
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
	/**
	 * 死循环：
	 * 
	 * 如果省略了循环条件，循环就不会结束，因此可以用更简洁地形式表达死循环。
	 */
	for {
	}
}