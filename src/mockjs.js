// 引入mockjs
import Mock from 'mockjs';
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(2, 5), //  Random.csentence( min, max )  随机生成2到5个文字。
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);


// 所有拼团
const allCollage = function() {
    let articles = [{
        img: Random.dataImage('200x100', '天堂'),
        status: 0,
        time: '60000',
        CommodityDescription: Random.csentence(6, 10),
        people: 5,
        PresentPrice: 99,
        OriginalPrice: 159,
        id: 0
    }, {
        img: Random.dataImage('200x100', '天堂'),
        status: 1,
        CommodityDescription: Random.csentence(6, 10),
        people: 3,
        PresentPrice: 49,
        OriginalPrice: 89,
        id: 1
    }, {
        img: Random.dataImage('200x100', '天堂'),
        status: 2,
        CommodityDescription: Random.csentence(6, 10),
        people: 2,
        PresentPrice: 9,
        OriginalPrice: 59,
        id: 2
    }, {
        img: Random.dataImage('200x100', '天堂'),
        status: 3,
        CommodityDescription: Random.csentence(6, 10),
        people: 8,
        PresentPrice: 999,
        OriginalPrice: 1059,
        id: 3
    }];
    return {
        articles: articles
    }
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/allCollage', 'post', allCollage);