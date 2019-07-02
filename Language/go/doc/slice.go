package main

import "fmt"

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}

func main() {
	/**
	 * slice：
	 *
	 * 指向一个序列的值，并且包含了长度信息。
	 * []T 是一个元素类型为 T 的 slice。
	 */
	p := []int{2, 3, 5, 7, 11, 13}
	fmt.Println("p ==", p)

	for i := 0; i < len(p); i++ {
		fmt.Printf("p[%d] == %d\n", i, p[i])
	}

	/**
	 * 对 slice 切片：
	 *
	 * slice 可以重新切片，创建一个新的 slice 值指向相同的数组。
	 * 表达式`s[lo:hi]`表示从 lo 到 hi-1 的 slice 元素，含两端。
	 * 因此，s[lo:lo]是空的，而s[lo:lo+1]有一个元素。
	 */
	fmt.Println("p[1:4] ==", p[1:4])
	// 省略下标代表从 0 开始
	fmt.Println("p[:3] ==", p[:3])
	// 省略上标代表到 len(s) 结束
	fmt.Println("p[4:] ==", p[4:])

	/**
	 * 构造 slice：
	 *
	 * slice 由函数 make 创建。这会分配一个零长度的数组并且返回一个 slice 指向这个数组：
	 * a := make([]int, 5)  // len(a)=5
	 * 为了指定容量，可传递第三个参数到 `make`：
	 * b := make([]int, 0, 5) // len(b)=0, cap(b)=5
	 * b = b[:cap(b)] // len(b)=5, cap(b)=5
	 * b = b[1:]      // len(b)=4, cap(b)=4
	 */
	a := make([]int, 5)
	printSlice("a", a)
	b := make([]int, 0, 5)
	printSlice("b", b)
	c := b[:2]
	printSlice("c", c)
	d := c[2:5]
	printSlice("d", d)

	/**
	 * slice 的零值是 `nil`。
	 * 一个 nil 的 slice 的长度和容量是 0。
	 */
	var z []int
	fmt.Println(z, len(z), cap(z))
	if z == nil {
		fmt.Println("nil!")
	}

	/**
	 * 向 slice 添加元素：
	 *
	 * 向 slice 添加元素是一种常见的操作，因此 Go 提供了一个内建函数 `append`：
	 * func append(s []T, vs ...T) []T
	 * append 的第一个参数 s 是一个类型为 T 的数组，其余类型为 T 的值将会添加到 slice；
	 * append 的结果是一个包含原 slice 所有元素加上新添加的元素的 slice；
	 * 如果 s 的底层数组太小，而不能容纳所有值时，会分配一个更大的数组，返回的 slice 会指向这个新分配的数组。
	 */
	// append works on nil slices.
	a = append(a, 0)
	printSlice("a", a)

	// the slice grows as needed.
	a = append(a, 1)
	printSlice("a", a)

	// we can add more than one element at a time.
	a = append(a, 2, 3, 4)
	printSlice("a", a)
}
