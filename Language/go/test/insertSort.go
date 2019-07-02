package main

import (
  . "fmt"
)

func InsertSort(a []int) []int {
	for i := 0; i < len(a); i++ {
		tmp := a[i]
		for j := i; j > 0; j-- {
			if tmp < a[j-1] {
				tmp, a[j-1] = a[j-1], tmp
			}
		}
	}
	return a
}

func main() {
	// a := []int{-1, 2, 5, 2, 4, 3}
	Printf("%d", InsertSort([]int{-1, 2, 5, 2, 4, 3}))
}
