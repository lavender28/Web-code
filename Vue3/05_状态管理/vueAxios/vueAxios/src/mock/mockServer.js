import Mock from 'mockjs';
import books from './books.json'

Mock.mock('/mock/getBooks', 'get', {
  code: 0,   // 请求成功的状态码
  message: 'success',
  data: books   // 模拟请求数据
})