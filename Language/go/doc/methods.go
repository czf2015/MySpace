package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

/**
 * 方法：
 *
 * Go 没有类。然而，仍然可以在结构体类型上定义方法。
 * 方法接收者 出现在 func 关键字和方法名之间的参数中。
 */
func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

type MyFloat float64

/**
 * 你可以对包中的任意类型定义任意方法，而不仅仅是针对结构体。
 * 但是，不能对来自其他包的类型或基础类型定义方法。
 */
func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

/**
 * 接收者为指针的方法：
 *
 * 方法可以与命名类型或命名类型的指针关联。有两个原因需要使用指针接收者：
 * 先避免在每个方法调用中拷贝值（如果值类型是大的结构体的话会更有效率）；
 * 其次，方法可以修改接收者指向的值。
 */
func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := &Vertex{3, 4}
	fmt.Println(v.Abs())

	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())

	v.Scale(5)
	fmt.Println(v)
}
