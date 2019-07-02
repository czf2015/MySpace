package main

import "fmt"

/**
 * 结构体：
 *
 * 一个结构体就是一个字段的集合。
 */
type Vertex struct {
	X int
	Y int
}

func main() {
	/**
	 * 结构体文法：
	 *
	 * 表示通过结构体字段的值作为列表来新分配一个结构体。
	 * 使用 Name: 语法可以仅列出部分字段。（字段名的顺序无关。）
	 * 特殊的前缀 & 返回一个指向结构体的指针。
	 */
	v1 := Vertex{1, 2}  // 类型为 Vertex
	v2 := Vertex{X: 1}  // Y:0 被省略
	v3 := Vertex{}      // X:0 和 Y:0
	p1 := &Vertex{1, 2} // 类型为 *Vertex
	fmt.Println(v1, p1, v2, v3)

	/**
	 * 结构体字段：
	 *
	 * 结构体字段使用点号来访问。
	 */
	v1.X = 4
	fmt.Println(v1.X)

	/**
	 * 结构体指针：
	 *
	 * 结构体字段可以通过结构体指针来访问。
	 * 通过指针间接的访问是透明的。
	 */
	p2 := &v1
	p2.X = 1e9
	fmt.Println(v1)
}
