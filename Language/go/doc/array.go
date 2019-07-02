package main

import "fmt"

func main() {
	/**
	 * 数组:
	 *
	 * 类型 [n]T 是一个有 n 个类型为 T 的值的数组。
	 * 表达式：
	 * var a [10]int
	 * 定义变量 a 是一个有十个整数的数组。
	 *
	 * 数组的长度是其类型的一部分，因此数组不能改变大小。
	 * 这看起来是一个制约，但是请不要担心；
	 * Go 提供了更加便利的方式来使用数组。
	 */
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)
}
