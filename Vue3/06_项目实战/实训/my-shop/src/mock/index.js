import Mock from 'mockjs'
import CategoryProduct from "./CategoryProduct.json";
import goodsList from './goodsList.json';
import shopGoodsAlbum from './shopGoodsAlbum.json';

Mock.mock('/mock/login', 'post', (req) => {
  let body = JSON.parse(req.body);
  if (body.username === 'admin' && body.password === '123456') {
    return {
      "code": 200,
      "msg": "登陆成功"
    };
  } else if (body.username === 'admin' && body.password != '123456') {
    return {
      "code": 400,
      "msg": "密码错误"
    };
  } else if (body.username != 'admin') {
    return {
      "code": 500,
      "msg": "账号不存在",
    };
  }
})

Mock.mock('/mock/register', 'post', (req) => {
  let body = JSON.parse(req.body);
  return {
    ...body,
    "code": 200,
    "msg": "注册成功",
  };
})

Mock.mock("/mock/category/list", "get", {
  code: 200,
  data: CategoryProduct,
})

Mock.mock('/mock/goods/list', 'get', {
  code: 200,
  data: goodsList
})

Mock.mock(RegExp('/mock/goods/album'+'.*'), 'get', (options) => {
  const goodsId = options.url.split('?')[1].split('=')[1]
  const filteredItems = shopGoodsAlbum.filter(item => item.goods_id === Number(goodsId))
  return {
    code: 200,
    data: filteredItems
  }
})

Mock.mock(RegExp('/mock/goods'+'.*'), 'get', (options) => {
  const id = options.url.split('?')[1].split('=')[1]
  const filteredItems = goodsList.filter(item => item.id === Number(id))[0]
  return {
    code: 200,
    data: filteredItems
  }
})

Mock.mock(RegExp('/mock/cart'+'.*'), 'get', (options) => {
  const ids = options.url.split('?')[1].split('=')[1].split(',').map(Number)
  const filteredItems = goodsList.filter(item => ids.includes(item.id))
  return {
    code: 200,
    data: filteredItems
  }
})