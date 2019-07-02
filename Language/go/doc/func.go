package main

import "fmt"

/**
 * 函数可以没有参数或接受多个参数。
 * 在这个例子中，`add` 接受两个 int 类型的参数。
 * 注意类型在变量名之后。
 * 当两个或多个连续的函数命名参数是同一类型，则除了最后一个类型之外，其他都可以省略。
 */
func add(x int, y int) int {
	return x + y
}

/* 函数可以返回任意数量的返回值，返回值可以被命名，并且像变量那样使用。
 * 返回值的名称应当具有一定的意义，可以作为文档使用。
 * 没有参数的 return 语句直接返回结果的当前值。
 * 直接返回语句仅应当用在像下面这样的短函数中，在长的函数中它们会影响代码的可读性。
 */
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(add(42, 13))
	fmt.Println(split(17))
}
