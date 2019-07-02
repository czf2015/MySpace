package main

import (
	"fmt"
	"io"
	"strings"
)

func main() {
	r := strings.NewReader("Hello, Reader!")

	b := make([]byte, 8)
	for {
		/**
		 * Readers：
		 *
		 * io 包指定了 io.Reader 接口，它表示从数据流结尾读取。
		 * Go 标准库包含了这个接口的许多实现，包括文件、网络连接、压缩、加密等等。
		 * io.Reader 接口有一个 Read 方法：
		 * func (T) Read(b []byte) (n int, err error)
		 * Read 用数据填充指定的字节 slice，并且返回填充的字节数和错误信息。 在遇到数据流结尾时，返回 io.EOF 错误。
		 * 例子代码创建了一个 strings.Reader，并且以每次 8 字节的速度读取它的输出。
		 */
		n, err := r.Read(b)
		fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
		fmt.Printf("b[:n] = %q\n", b[:n])
		if err == io.EOF {
			break
		}
	}
}
