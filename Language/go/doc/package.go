/**
 * 每个 Go 程序都是由包组成的。
 * 程序运行的入口是包 `main`。
 * 按照惯例，包名与导入路径的最后一个目录一致。例如，`"math/rand"` 包由 package rand 语句开始。
 */
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}
