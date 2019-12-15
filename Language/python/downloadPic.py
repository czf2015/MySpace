#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import requests

url = 'https://pvp.qq.com/web201605/js/herolist.json'
herolist = requests.get(url)  # 获取英雄列表json文件

herolist_json = herolist.json()  # 转化为json格式
hero_name = list(map(lambda x: x['cname'], herolist.json()))  # 提取英雄的名字
hero_number = list(map(lambda x: x['ename'], herolist.json()))  # 提取英雄的编号


# 下载图片
def downloadPic():
    i = 0
    for j in hero_number:
        # 创建文件夹
        os.mkdir("/home/czf/playground/MySpace/Language/python/images/" + hero_name[i])
        # 进入创建好的文件夹
        os.chdir("/home/czf/playground/MySpace/Language/python/images/" + hero_name[i])
        i += 1
        for k in range(10):
            # 拼接url
            onehero_link = 'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/' + str(j) + '/' + str(j) + '-bigskin-' + str(k) + '.jpg'
            im = requests.get(onehero_link)  # 请求url
            if im.status_code == 200:
                open(str(k) + '.jpg', 'wb').write(im.content)  # 写入文件


downloadPic()
# ————————————————
# 版权声明：本文为CSDN博主「~wangweijun」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/qq_42453117/article/details/103190981