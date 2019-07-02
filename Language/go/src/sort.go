package main

import (
	"fmt"
	"sort"
)

// 实现sort接口的Len, Swap和Less方法
type ByLength []string

func (s ByLength) Len() int {
	return len(s)
}

func (s ByLength) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s ByLength) Less(i, j int) bool {
	return len(s[i]) < len(s[j])
}

func main() {
	arr := []int{2, 5, 2}
	sort.Ints(arr)
	fmt.Println(arr)
	//
	str := []string{"cb3", "adc4", "c2"}
	sort.Strings(str)
	fmt.Println(str)
	// 自定义排序
	// 将str转换为ByLength类型，然后使用sort包的Sort方法来排序
	sort.Sort(ByLength(str))
	fmt.Println(str)
}
