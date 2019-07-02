package main

import (
	"fmt"
	"image"
)

func main() {
	/**
	 * Package image 定义了 Image 接口：
	 *
	 * package image
	 *
	 * type Image interface {
	 *   ColorModel() color.Model
	 *   Bounds() Rectangle
	 *   At(x, y int) color.Color
	 * }
	 *
	 * *注意*：`Bounds` 方法的 Rectangle 返回值实际上是一个 image.Rectangle， 其定义在 image 包中。
	 *         color.Color 和 color.Model 也是接口，但是通常因为直接使用预定义的实现 image.RGBA 和 image.RGBAModel 而被忽视了。这些接口和类型由image/color 包定义。
	 */
	m := image.NewRGBA(image.Rect(0, 0, 100, 100))
	fmt.Println(m.Bounds())
	fmt.Println(m.At(0, 0).RGBA())
}
