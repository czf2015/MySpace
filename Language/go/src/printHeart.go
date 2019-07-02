package main

import (
	"fmt"
	"math"
)

func main() {
	for y := 1.3; y >= -1.1; y -= 0.06 {
		for x := -1.2; x <= 1.2; x += 0.025 {
			if math.Pow((x*x+y*y-1.0), 3)-x*x*y*y*y <= 0.0 {
				fmt.Print("*")
			} else {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}
