/**
 * golang中使用MongoDB：
 *
 * mgo（音mango）是MongoDB的Go语言驱动，它用基于Go语法的简单API实现了丰富的特性，并经过良好测试。
 * [文档](http://godoc.org/labix.org/v2/mgo)
 *
 * 获取：go get gopkg.in/mgo.v21
 * 连接：session, err := mgo.Dial(url)1
 * 切换数据库：db := session.DB("test")1
 * 切换集合：func (db Database) C(name string) *Collection1
 * 插入：func (c *Collection) Insert(docs ...interface{}) error1
 * c := session.DB("store").C("books")
 * err = c.Insert(book)  12
 * 查询：func (c Collection) Find(query interface{}) Query1
 * 更新：
 * c := session.DB("store").C("books")
 * err = c.Update(bson.M{"isbn": isbn}, &book)12
 * 查询所有：
 * c := session.DB("store").C("books")
 * var books []Book
 * err := c.Find(bson.M{}).All(&books)1234
 * 删除：
 * c := session.DB("store").C("books")
 * err := c.Remove(bson.M{"isbn": isbn})
 */
package main

import (
	"fmt"
	"log"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type Person struct {
	Name  string
	Phone string
}

func main() {
	session, err := mgo.Dial("localhost:27017")
	if err != nil {
		panic(err)
	}
	defer session.Close()

	// Optional. Switch the session to a monotonic behavior.
	session.SetMode(mgo.Monotonic, true)

	c := session.DB("test").C("people")
	err = c.Insert(&Person{"superWang", "13478808311"},
		&Person{"David", "15040268074"})
	if err != nil {
		log.Fatal(err)
	}

	result := Person{}
	err = c.Find(bson.M{"name": "superWang"}).One(&result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Name:", result.Name)
	fmt.Println("Phone:", result.Phone)
}
