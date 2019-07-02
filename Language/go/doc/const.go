package main

import "fmt"

/**
 * 常量：
 *
 * 使用 const 关键字定义，可以是字符、字符串、布尔或数字类型的值。
 */
const World = "世界"

func main() {
	/**
	 * 数值常量：
	 *
	 * 数值常量是高精度的值。
	 * 一个未指定类型的常量由上下文来决定其类型。
	 */
	const Pi = 3.14
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true
	fmt.Println("Go rules?", Truth)
}
