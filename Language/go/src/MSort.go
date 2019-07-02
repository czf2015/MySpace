package main

import (
	"fmt"
	"math/rand"
)

func MSort(a, b []float64, left, right int) {
	if left < right {
		center := (left + right) / 2
		MSort(a, b, left, center)
		MSort(a, b, center+1, right)
		tmp := center + 1
		count := right - left + 1
		for i := left; i <= right; i++ {
			if left <= center && tmp <= right {
				if a[left] < a[tmp] {
					b[i] = a[left]
					left++
				} else {
					b[i] = a[tmp]
					tmp++
				}
			} else if left <= center {
				for ; left <= center; left++ {
					b[i] = a[left]
					i++
				}
			} else if tmp <= right {
				for ; tmp <= right; tmp++ {
					b[i] = a[tmp]
					i++
				}
			}
		}
		for i := right; count > 0; count-- {
			a[i] = b[i]
			i--
		}
	}
}

func main() {
	a := make([]float64, 10000000)
	b := make([]float64, 10000000)
	count := len(a)
	for i := 0; i < count; i++ {
		a[i] = rand.Float64()
	}

	MSort(a, b, 0, count-1)
	fmt.Println(a)
}
