root PdF1nK9jFV.w

* where：数据库中常用的是where关键字，用于在初始表中筛选查询。它是一个约束声明，用于约束数据，在返回结果集之前起作用。
* group by:对select查询出来的结果集按照某个字段或者表达式进行分组，获得一组组的集合，然后从每组中取出一个指定字段或者表达式的值。
* having：用于对where和group by查询出来的分组经行过滤，查出满足条件的分组结果。它是一个过滤声明，是在查询返回结果集以后对查询结果进行的过滤操作。

执行顺序: select –> where –> group by –> having –> order by



delete，drop，truncate 都有删除表的作用，区别在于：
 * delete 和 truncate 仅仅删除表数据，drop 连表数据和表结构一起删除; 
 * delete 是 DML 语句，操作完以后如果没有不想提交事务还可以回滚，truncate 和 drop 是 DDL 语句，操作完马上生效，不能回滚;
 * 执行的速度上, drop > truncate > delete。


在 where like 的条件查询中，SQL 提供了四种匹配方式:

* %：表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。
* _：表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句。
* []：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个。
* [^] ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。

查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询。

'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
'_a_'    //三位且中间字母是a的
'_a'     //两位且结尾字母是a的
'a_'     //两位且开头字母是a的


UNION 语句：用于将不同表中相同列中查询的数据展示出来；（不包括重复数据）
UNION ALL 语句：用于将不同表中相同列中查询的数据展示出来；（包括重复数据）
使用形式如下：
SELECT 列名称 FROM 表名称 UNION SELECT 列名称 FROM 表名称 ORDER BY 列名称；
SELECT 列名称 FROM 表名称 UNION ALL SELECT 列名称 FROM 表名称 ORDER BY 列名称；


MySQL 拼音排序
如果字符集采用的是 gbk(汉字编码字符集)，直接在查询语句后边添加 ORDER BY：
SELECT * 
FROM runoob_tbl
ORDER BY runoob_title;
如果字符集采用的是 utf8(万国码)，需要先对字段进行转码然后排序：
SELECT * 
FROM runoob_tbl
ORDER BY CONVERT(runoob_title using gbk);



