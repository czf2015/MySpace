package main

import (
	"fmt"
	"math"
	"time"
)

/**
 * 接口：
 *
 * 接口类型是由一组方法定义的集合。
 * 接口类型的值可以存放实现这些方法的任何值。
 */
type Abser interface {
	Abs() float64
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

type MyError struct {
	When time.Time
	What string
}

/**
 * 隐式接口：
 *
 * 类型通过实现那些方法来实现接口。 没有显式声明的必要；
 * 隐式接口解藕了实现接口的包和定义接口的包：互不依赖。
 * 因此，也就无需在每一个实现上增加新的接口名称，这样同时也鼓励了明确的接口定义。
 *
 * Go 程序使用 error 值来表示错误状态，`error` 类型是一个`内建接口`：
 * type error interface {
 *   Error() string
 * }
 * 通常函数会返回一个`error`值，调用的它的代码应当判断这个错误是否等于`nil`来进行错误处理。
 */
func (e *MyError) Error() string {
	return fmt.Sprintf("at %v, %s",
		e.When, e.What)
}

func run() error {
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f // a MyFloat 实现了 Abser
	fmt.Println(a.Abs())
	a = &v // a *Vertex 实现了 Abser
	fmt.Println(a.Abs())

	// 下面一行，v 是一个 Vertex（而不是 *Vertex）
	// 所以没有实现 Abser。
	a = v
	//编译错误
	//fmt.Println(a.Abs())

	if err := run(); err != nil {
		fmt.Println(err)
	}
}
