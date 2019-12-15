#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import requests
import re
import json
import sys
from bs4 import BeautifulSoup
from urllib import request


class video_downloader():
    def __init__(self, url):
        self.server = 'http://api.xfsub.com'
        self.api = 'http://api.xfsub.com/xfsub_api/?url='
        self.get_url_api = 'http://api.xfsub.com/xfsub_api/url.php'
        self.url = url.split('#')[0]
        self.target = self.api + self.url
        self.s = requests.session()

    """
        函数说明:获取key、time、url等参数
        Parameters:
            无
        Returns:
            无
        Modify:
            2017-09-18
    """

    def get_key(self):
        req = self.s.get(url=self.target)
        req.encoding = 'utf-8'
        # 使用正则表达式匹配结果，将匹配的结果存入info变量中
        self.info = json.loads(re.findall('"url.php",\ (.+),', req.text)[0])

    """
    函数说明:获取视频地址
    Parameters:
        无
    Returns:
        video_url - 视频存放地址
    Modify:
           2017-09-18
    """

    def get_url(self):
        data = {'time': self.info['time'],
                'key': self.info['key'],
                'url': self.info['url'],
                'type': ''}
        req = self.s.post(url=self.get_url_api, data=data)
        url = self.server + json.loads(req.text)['url']
        req = self.s.get(url)
        bf = BeautifulSoup(req.text, 'xml')  # 因为文件是xml格式的，所以要进行xml解析。
        video_url = bf.find('file').string  # 匹配到视频地址
        return video_url

    """
    函数说明:回调函数，打印下载进度
    Parameters:
        a b c - 返回信息
    Returns:
        无
        Modify:
        2017-09-18
    """

    def video_download(self, url, filename):
        request.urlretrieve(url=url, filename=filename,
                            reporthook=self.Schedule)


if __name__ == '__main__':
    url = 'http://www.iqiyi.com/v_19rr7qhfg0.html#vfrm=19-9-0-1'
    vd = video_downloader(url)
    filename = '加勒比海盗5'
    print('%s下载中:' % filename)
    vd.get_key()
    video_url = vd.get_url()
    print('获取地址成功: %s' % video_url)
    vd.video_download(video_url, filename+'.mp4')
    print('\n下载完成！')
