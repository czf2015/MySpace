/**
 * 基本类型：
 *
 * bool
 * string
 * int  int8  int16  int32  int64
 * uint uint8 uint16 uint32 uint64 uintptr
 * byte // uint8 的别名
 * rune // int32 的别名，代表一个Unicode码
 * float32 float64
 * complex64 complex128
 */
package main

import (
	"fmt"
	"math/cmplx"
)

/**
 * 这个例子演示了具有不同类型的变量。
 * 同时与导入语句一样，变量的定义“打包”在一个语法块中。
 */
var (
	/**
	 * 零值：
	 *
	 * 变量在定义时没有明确的初始化时会赋值为`零值`：
	 * 数值类型为 `0`，布尔类型为 `false`，字符串为 `""`（空字符串）。
	 */
	ToBe   bool
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	/**
	 * 类型转换：
	 *
	 * 表达式 T(v) 将值 v 转换为类型 `T`。
	 * 一些关于数值的转换：
	 * var i int = 42
	 * var f float64 = float64(i)
	 * var u uint = uint(f)
	 *
	 * 或者更加简单的形式：
	 * i := 42
	 * f := float64(i)
	 * u := uint(f)
	 *
	 * 与 C 不同的是 Go 的在不同类型之间的项目赋值时需要显式转换。
	 */
	i := float64(Maxint)
	/**
	 * 类型推导：
	 *
	 * 在定义一个变量但不指定其类型时（使用没有类型的 var 或 := 语句），变量的类型由右值推导得出。
	 *
	 * 当右值定义了类型时，新变量的类型与其相同：
	 * var i int
	 * j := i // j 也是一个 int
	 *
	 * 但是当右边包含了未指名类型的数字常量时，新的变量就可能是 int 、 float64 或 `complex128`。
	 * 这取决于常量的精度：
	 * i := 42           // int
	 * f := 3.142        // float64
	 * g := 0.867 + 0.5i // complex128
	 */
	j := z

	const f = "%T(%v)\n"
	fmt.Printf(f, ToBe, ToBe)
	fmt.Printf(f, MaxInt, MaxInt)
	fmt.Printf(f, z, z)
	fmt.Printf(f, i, i)
	fmt.Printf(f, j, j)
}
