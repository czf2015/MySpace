package main

import (
	"fmt"
	"math/rand"
)

func main() {
	var a [100000]float64
	count := len(a)
	for i := 0; i < count; i++ {
		a[i] = rand.Float64()
		i++
		a[i] = -rand.Float64()
	}

	var l, d, t float64 //l表示相邻光标的距离，d表示相邻点到中心的距离差，t比较相邻值的大小
	temp := a[0]
	s := a[0] //s表示光标相对中心的位置
	if a[0] < 0 {
		a[0] = -a[0]
	}
	r := a[0] //r表示光标到中心的距离
	for i := 1; i < count; i++ {
		s += a[i]
		t = a[i] - temp
		if t < 0 {
			l -= t
		} else {
			l += t
		}
		temp = a[i]

		if a[i] < 0 {
			a[i] = -a[i]
		}
		r += a[i]
		t = a[i] - a[i-1]
		if t < 0 {
			d -= t
		} else {
			d += t
		}
	}

	t = float64(count)
	fmt.Println(s/t, r/t, l/(t-1), d/(t-1))
}
