package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	/**
	 * if：
	 *
	 * 没有`( )`甚至强制不能使用它们），而`{ }`是必须的。
	 *
	 * `if` 语句可以在条件之前执行一个简单的语句。
	 * 由这个语句定义的变量的作用域仅在 if 范围之内，
	 * 同样也可以在任何对应的 else 块中使用。
	 */
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

func main() {
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)
}
