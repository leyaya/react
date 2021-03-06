import config from '../js/config.js'
export default {
    // 获取电影列表数据
    getMovieListData:function (message) {
        console.log('service下面的message对象')
        console.log(message)
        return new Promise(function(resolve, reject) {
            const url=`${config.SERVER_HTTP}${config.SERVER_PATH}:${config.SERVER_PORT}/api/getMovieListData?message=${message}`
            const data={
                "count": 10,
                "start": 6,
                "total": 88,
                "subjects": [
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "悬疑",
                            "惊悚"
                        ],
                        "title": "夜闯寡妇村",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1340463/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1463280188.68.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1463280188.68.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1463280188.68.jpg"
                                },
                                "name": "于朦胧",
                                "id": "1340463"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1323199/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1366350370.69.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1366350370.69.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1366350370.69.jpg"
                                },
                                "name": "王李丹妮",
                                "id": "1323199"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1330036/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1371521692.7.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1371521692.7.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1371521692.7.jpg"
                                },
                                "name": "郭艳",
                                "id": "1330036"
                            }
                        ],
                        "collect_count": 176,
                        "original_title": "夜闯寡妇村",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1329269/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1371504300.86.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1371504300.86.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1371504300.86.jpg"
                                },
                                "name": "邢博",
                                "id": "1329269"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2280373397.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2280373397.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2280373397.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26590030/",
                        "id": "26590030"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动作"
                        ],
                        "title": "辣警霸王花",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1323010/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/54947.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/54947.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/54947.jpg"
                                },
                                "name": "岑丽香",
                                "id": "1323010"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1007512/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/32886.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/32886.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/32886.jpg"
                                },
                                "name": "郑欣宜",
                                "id": "1007512"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1316213/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/35538.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/35538.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/35538.jpg"
                                },
                                "name": "何佩瑜",
                                "id": "1316213"
                            }
                        ],
                        "collect_count": 14,
                        "original_title": "辣警霸王花",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1320972/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1356188758.51.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1356188758.51.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1356188758.51.jpg"
                                },
                                "name": "钱国伟",
                                "id": "1320972"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2395831539.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395831539.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2395831539.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26235351/",
                        "id": "26235351"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "动作",
                            "纪录片"
                        ],
                        "title": "武林探秘",
                        "casts": [],
                        "collect_count": 7,
                        "original_title": "武林探秘",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1357182/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                    "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                    "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                },
                                "name": "于小鹏",
                                "id": "1357182"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2340463447.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2340463447.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2340463447.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26780410/",
                        "id": "26780410"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "悬疑",
                            "惊悚"
                        ],
                        "title": "江南灵异录之白云桥",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1326971/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
                                },
                                "name": "钟萱",
                                "id": "1326971"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1042785/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/7016.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/7016.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/7016.jpg"
                                },
                                "name": "温兆伦",
                                "id": "1042785"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1339574/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1457753799.81.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1457753799.81.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1457753799.81.jpg"
                                },
                                "name": "刘宇珽",
                                "id": "1339574"
                            }
                        ],
                        "collect_count": 13,
                        "original_title": "江南灵异录之白云桥",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1326971/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
                                },
                                "name": "钟萱",
                                "id": "1326971"
                            }
                        ],
                        "year": "2015",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2393767969.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2393767969.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2393767969.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26438800/",
                        "id": "26438800"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "剧情",
                            "儿童"
                        ],
                        "title": "少年梦",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1341712/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1472980082.13.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1472980082.13.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1472980082.13.jpg"
                                },
                                "name": "龙梅子",
                                "id": "1341712"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1341714/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1474438068.98.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1474438068.98.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1474438068.98.jpg"
                                },
                                "name": "冷漠",
                                "id": "1341714"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1008125/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/3482.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/3482.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/3482.jpg"
                                },
                                "name": "梁家仁",
                                "id": "1008125"
                            }
                        ],
                        "collect_count": 7,
                        "original_title": "少年梦",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1319028/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/45417.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/45417.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/45417.jpg"
                                },
                                "name": "王宇",
                                "id": "1319028"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2382352747.jpg",
                            "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382352747.jpg",
                            "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382352747.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26878091/",
                        "id": "26878091"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "奇幻",
                            "冒险"
                        ],
                        "title": "神奇动物在哪里",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1010503/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/9399.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/9399.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/9399.jpg"
                                },
                                "name": "埃迪·雷德梅恩",
                                "id": "1010503"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1316589/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/37005.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/37005.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/37005.jpg"
                                },
                                "name": "凯瑟琳·沃特斯顿",
                                "id": "1316589"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1027317/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/31252.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/31252.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/31252.jpg"
                                },
                                "name": "丹·福勒",
                                "id": "1027317"
                            }
                        ],
                        "collect_count": 279,
                        "original_title": "Fantastic Beasts and Where to Find Them",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1275147/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/9900.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/9900.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/9900.jpg"
                                },
                                "name": "大卫·叶茨",
                                "id": "1275147"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392444121.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392444121.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392444121.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/25726614/",
                        "id": "25726614"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "动作",
                            "动画"
                        ],
                        "title": "海洋奇缘",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1044707/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/196.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/196.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/196.jpg"
                                },
                                "name": "道恩·强森",
                                "id": "1044707"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1031855/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/13834.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/13834.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/13834.jpg"
                                },
                                "name": "艾伦·图代克",
                                "id": "1031855"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1013808/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1734.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1734.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1734.jpg"
                                },
                                "name": "杰梅奈·克莱门特",
                                "id": "1013808"
                            }
                        ],
                        "collect_count": 70,
                        "original_title": "Moana",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1045252/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/48764.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/48764.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/48764.jpg"
                                },
                                "name": "罗恩·克莱蒙兹",
                                "id": "1045252"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1041456/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/1359182726.97.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/1359182726.97.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/1359182726.97.jpg"
                                },
                                "name": "约翰·马斯克",
                                "id": "1041456"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392085223.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392085223.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392085223.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/25793398/",
                        "id": "25793398"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "动作",
                            "悬疑"
                        ],
                        "title": "冲天火",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1027502/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/2429.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/2429.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/2429.jpg"
                                },
                                "name": "吴彦祖",
                                "id": "1027502"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1313867/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/1439435972.76.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/1439435972.76.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/1439435972.76.jpg"
                                },
                                "name": "张若昀",
                                "id": "1313867"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1016668/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/146.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/146.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/146.jpg"
                                },
                                "name": "张静初",
                                "id": "1016668"
                            }
                        ],
                        "collect_count": 92,
                        "original_title": "冲天火",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1275076/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/12098.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/12098.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/12098.jpg"
                                },
                                "name": "林岭东",
                                "id": "1275076"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394867674.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394867674.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394867674.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26365631/",
                        "id": "26365631"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "喜剧",
                            "爱情"
                        ],
                        "title": "最萌身高差",
                        "casts": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1273313/",
                                "avatars": {
                                    "small": "https://img5.doubanio.com/img/celebrity/small/9696.jpg",
                                    "large": "https://img5.doubanio.com/img/celebrity/large/9696.jpg",
                                    "medium": "https://img5.doubanio.com/img/celebrity/medium/9696.jpg"
                                },
                                "name": "高以翔",
                                "id": "1273313"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1318538/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/43230.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/43230.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/43230.jpg"
                                },
                                "name": "王水林",
                                "id": "1318538"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1351495/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/1461475829.75.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/1461475829.75.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1461475829.75.jpg"
                                },
                                "name": "范湉湉",
                                "id": "1351495"
                            }
                        ],
                        "collect_count": 165,
                        "original_title": "最萌身高差",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": "https://movie.douban.com/celebrity/1318533/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/43227.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/43227.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/43227.jpg"
                                },
                                "name": "马侃",
                                "id": "1318533"
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390667481.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390667481.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390667481.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26696875/",
                        "id": "26696875"
                    },
                    {
                        "rating": {
                            "max": 10,
                            "average": 0,
                            "stars": "00",
                            "min": 0
                        },
                        "genres": [
                            "惊悚"
                        ],
                        "title": "怨灵地下室",
                        "casts": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "倪新宇",
                                "id": null
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1318068/",
                                "avatars": {
                                    "small": "https://img1.doubanio.com/img/celebrity/small/46159.jpg",
                                    "large": "https://img1.doubanio.com/img/celebrity/large/46159.jpg",
                                    "medium": "https://img1.doubanio.com/img/celebrity/medium/46159.jpg"
                                },
                                "name": "陈美行",
                                "id": "1318068"
                            },
                            {
                                "alt": "https://movie.douban.com/celebrity/1275600/",
                                "avatars": {
                                    "small": "https://img3.doubanio.com/img/celebrity/small/11524.jpg",
                                    "large": "https://img3.doubanio.com/img/celebrity/large/11524.jpg",
                                    "medium": "https://img3.doubanio.com/img/celebrity/medium/11524.jpg"
                                },
                                "name": "那威",
                                "id": "1275600"
                            }
                        ],
                        "collect_count": 17,
                        "original_title": "怨灵地下室",
                        "subtype": "movie",
                        "directors": [
                            {
                                "alt": null,
                                "avatars": null,
                                "name": "周广兴",
                                "id": null
                            }
                        ],
                        "year": "2016",
                        "images": {
                            "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2396427354.jpg",
                            "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2396427354.jpg",
                            "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2396427354.jpg"
                        },
                        "alt": "https://movie.douban.com/subject/26876505/",
                        "id": "26876505"
                    }
                ],
                "title": "即将上映的电影"
            }
            resolve(data)
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err)=> {
                    reject(err);
                })
        });

    },
    // 获取电影详细数据
    getMovieDetailData:function (id) {
        return new Promise(function(resolve, reject) {
            const url=`${config.SERVER_HTTP}${config.SERVER_PATH}:${config.SERVER_PORT}/api/getMovieDetailData?message=${id}`
            // const data={
            //     "count": 10,
            //     "start": 6,
            //     "total": 88,
            //     "subjects": [
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "悬疑",
            //                 "惊悚"
            //             ],
            //             "title": "夜闯寡妇村",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1340463/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1463280188.68.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1463280188.68.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1463280188.68.jpg"
            //                     },
            //                     "name": "于朦胧",
            //                     "id": "1340463"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1323199/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1366350370.69.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1366350370.69.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1366350370.69.jpg"
            //                     },
            //                     "name": "王李丹妮",
            //                     "id": "1323199"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1330036/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1371521692.7.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1371521692.7.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1371521692.7.jpg"
            //                     },
            //                     "name": "郭艳",
            //                     "id": "1330036"
            //                 }
            //             ],
            //             "collect_count": 176,
            //             "original_title": "夜闯寡妇村",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1329269/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/1371504300.86.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/1371504300.86.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/1371504300.86.jpg"
            //                     },
            //                     "name": "邢博",
            //                     "id": "1329269"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2280373397.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2280373397.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2280373397.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26590030/",
            //             "id": "26590030"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧",
            //                 "动作"
            //             ],
            //             "title": "辣警霸王花",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1323010/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/54947.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/54947.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/54947.jpg"
            //                     },
            //                     "name": "岑丽香",
            //                     "id": "1323010"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1007512/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/32886.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/32886.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/32886.jpg"
            //                     },
            //                     "name": "郑欣宜",
            //                     "id": "1007512"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1316213/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/35538.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/35538.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/35538.jpg"
            //                     },
            //                     "name": "何佩瑜",
            //                     "id": "1316213"
            //                 }
            //             ],
            //             "collect_count": 14,
            //             "original_title": "辣警霸王花",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1320972/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1356188758.51.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1356188758.51.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1356188758.51.jpg"
            //                     },
            //                     "name": "钱国伟",
            //                     "id": "1320972"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2395831539.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395831539.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2395831539.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26235351/",
            //             "id": "26235351"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "动作",
            //                 "纪录片"
            //             ],
            //             "title": "武林探秘",
            //             "casts": [],
            //             "collect_count": 7,
            //             "original_title": "武林探秘",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1357182/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            //                         "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            //                         "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
            //                     },
            //                     "name": "于小鹏",
            //                     "id": "1357182"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2340463447.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2340463447.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2340463447.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26780410/",
            //             "id": "26780410"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "悬疑",
            //                 "惊悚"
            //             ],
            //             "title": "江南灵异录之白云桥",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1326971/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
            //                     },
            //                     "name": "钟萱",
            //                     "id": "1326971"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1042785/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/7016.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/7016.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/7016.jpg"
            //                     },
            //                     "name": "温兆伦",
            //                     "id": "1042785"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1339574/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1457753799.81.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1457753799.81.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1457753799.81.jpg"
            //                     },
            //                     "name": "刘宇珽",
            //                     "id": "1339574"
            //                 }
            //             ],
            //             "collect_count": 13,
            //             "original_title": "江南灵异录之白云桥",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1326971/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1473847921.78.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1473847921.78.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
            //                     },
            //                     "name": "钟萱",
            //                     "id": "1326971"
            //                 }
            //             ],
            //             "year": "2015",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2393767969.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2393767969.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2393767969.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26438800/",
            //             "id": "26438800"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "剧情",
            //                 "儿童"
            //             ],
            //             "title": "少年梦",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1341712/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1472980082.13.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1472980082.13.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1472980082.13.jpg"
            //                     },
            //                     "name": "龙梅子",
            //                     "id": "1341712"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1341714/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1474438068.98.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1474438068.98.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1474438068.98.jpg"
            //                     },
            //                     "name": "冷漠",
            //                     "id": "1341714"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1008125/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/3482.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/3482.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/3482.jpg"
            //                     },
            //                     "name": "梁家仁",
            //                     "id": "1008125"
            //                 }
            //             ],
            //             "collect_count": 7,
            //             "original_title": "少年梦",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1319028/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/45417.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/45417.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/45417.jpg"
            //                     },
            //                     "name": "王宇",
            //                     "id": "1319028"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2382352747.jpg",
            //                 "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2382352747.jpg",
            //                 "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2382352747.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26878091/",
            //             "id": "26878091"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "奇幻",
            //                 "冒险"
            //             ],
            //             "title": "神奇动物在哪里",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1010503/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/9399.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/9399.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/9399.jpg"
            //                     },
            //                     "name": "埃迪·雷德梅恩",
            //                     "id": "1010503"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1316589/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/37005.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/37005.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/37005.jpg"
            //                     },
            //                     "name": "凯瑟琳·沃特斯顿",
            //                     "id": "1316589"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1027317/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/31252.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/31252.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/31252.jpg"
            //                     },
            //                     "name": "丹·福勒",
            //                     "id": "1027317"
            //                 }
            //             ],
            //             "collect_count": 279,
            //             "original_title": "Fantastic Beasts and Where to Find Them",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1275147/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/9900.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/9900.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/9900.jpg"
            //                     },
            //                     "name": "大卫·叶茨",
            //                     "id": "1275147"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392444121.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392444121.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392444121.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/25726614/",
            //             "id": "25726614"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧",
            //                 "动作",
            //                 "动画"
            //             ],
            //             "title": "海洋奇缘",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1044707/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/196.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/196.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/196.jpg"
            //                     },
            //                     "name": "道恩·强森",
            //                     "id": "1044707"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1031855/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/13834.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/13834.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/13834.jpg"
            //                     },
            //                     "name": "艾伦·图代克",
            //                     "id": "1031855"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1013808/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1734.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1734.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1734.jpg"
            //                     },
            //                     "name": "杰梅奈·克莱门特",
            //                     "id": "1013808"
            //                 }
            //             ],
            //             "collect_count": 70,
            //             "original_title": "Moana",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1045252/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/48764.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/48764.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/48764.jpg"
            //                     },
            //                     "name": "罗恩·克莱蒙兹",
            //                     "id": "1045252"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1041456/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/1359182726.97.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/1359182726.97.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/1359182726.97.jpg"
            //                     },
            //                     "name": "约翰·马斯克",
            //                     "id": "1041456"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392085223.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392085223.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392085223.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/25793398/",
            //             "id": "25793398"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "动作",
            //                 "悬疑"
            //             ],
            //             "title": "冲天火",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1027502/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/2429.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/2429.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/2429.jpg"
            //                     },
            //                     "name": "吴彦祖",
            //                     "id": "1027502"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1313867/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/1439435972.76.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/1439435972.76.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/1439435972.76.jpg"
            //                     },
            //                     "name": "张若昀",
            //                     "id": "1313867"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1016668/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/146.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/146.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/146.jpg"
            //                     },
            //                     "name": "张静初",
            //                     "id": "1016668"
            //                 }
            //             ],
            //             "collect_count": 92,
            //             "original_title": "冲天火",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1275076/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/12098.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/12098.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/12098.jpg"
            //                     },
            //                     "name": "林岭东",
            //                     "id": "1275076"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394867674.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394867674.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394867674.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26365631/",
            //             "id": "26365631"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "喜剧",
            //                 "爱情"
            //             ],
            //             "title": "最萌身高差",
            //             "casts": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1273313/",
            //                     "avatars": {
            //                         "small": "https://img5.doubanio.com/img/celebrity/small/9696.jpg",
            //                         "large": "https://img5.doubanio.com/img/celebrity/large/9696.jpg",
            //                         "medium": "https://img5.doubanio.com/img/celebrity/medium/9696.jpg"
            //                     },
            //                     "name": "高以翔",
            //                     "id": "1273313"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1318538/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/43230.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/43230.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/43230.jpg"
            //                     },
            //                     "name": "王水林",
            //                     "id": "1318538"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1351495/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/1461475829.75.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/1461475829.75.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/1461475829.75.jpg"
            //                     },
            //                     "name": "范湉湉",
            //                     "id": "1351495"
            //                 }
            //             ],
            //             "collect_count": 165,
            //             "original_title": "最萌身高差",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1318533/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/43227.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/43227.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/43227.jpg"
            //                     },
            //                     "name": "马侃",
            //                     "id": "1318533"
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2390667481.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2390667481.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2390667481.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26696875/",
            //             "id": "26696875"
            //         },
            //         {
            //             "rating": {
            //                 "max": 10,
            //                 "average": 0,
            //                 "stars": "00",
            //                 "min": 0
            //             },
            //             "genres": [
            //                 "惊悚"
            //             ],
            //             "title": "怨灵地下室",
            //             "casts": [
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "倪新宇",
            //                     "id": null
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1318068/",
            //                     "avatars": {
            //                         "small": "https://img1.doubanio.com/img/celebrity/small/46159.jpg",
            //                         "large": "https://img1.doubanio.com/img/celebrity/large/46159.jpg",
            //                         "medium": "https://img1.doubanio.com/img/celebrity/medium/46159.jpg"
            //                     },
            //                     "name": "陈美行",
            //                     "id": "1318068"
            //                 },
            //                 {
            //                     "alt": "https://movie.douban.com/celebrity/1275600/",
            //                     "avatars": {
            //                         "small": "https://img3.doubanio.com/img/celebrity/small/11524.jpg",
            //                         "large": "https://img3.doubanio.com/img/celebrity/large/11524.jpg",
            //                         "medium": "https://img3.doubanio.com/img/celebrity/medium/11524.jpg"
            //                     },
            //                     "name": "那威",
            //                     "id": "1275600"
            //                 }
            //             ],
            //             "collect_count": 17,
            //             "original_title": "怨灵地下室",
            //             "subtype": "movie",
            //             "directors": [
            //                 {
            //                     "alt": null,
            //                     "avatars": null,
            //                     "name": "周广兴",
            //                     "id": null
            //                 }
            //             ],
            //             "year": "2016",
            //             "images": {
            //                 "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2396427354.jpg",
            //                 "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2396427354.jpg",
            //                 "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2396427354.jpg"
            //             },
            //             "alt": "https://movie.douban.com/subject/26876505/",
            //             "id": "26876505"
            //         }
            //     ],
            //     "title": "即将上映的电影"
            // }
            // resolve(data)
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((err)=> {
                    reject(err);
                })
        });
    },
    // 根据查询条件获取数据
    getMovielistDataByKey:function () {

    }

}