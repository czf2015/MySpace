package main

/**
 * 这个代码用圆括号组合了导入，这是“打包”导入语句。
 * 同样可以编写多个导入语句，例如：
 * import "fmt"
 * import "math"
 * 不过使用打包的导入语句是更好的形式。
 */
import (
	"fmt"
	"math"
)

func main() {
	/**
	 * 在导入了一个包之后，就可以用其导出的名称来调用它。
	 * 在 Go 中，首字母大写的名称是被导出的。
	 */
	fmt.Printf("Now you have %g problems.", math.Nextafter(2, 3))
}
