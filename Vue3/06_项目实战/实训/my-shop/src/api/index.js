import request from '@/utils/request'

// 登录接口
export function login(data) {
  return request.post('/login', data)
}
// 注册接口
export function register(data) {
  return request.post('/register', data)
}

// 分类接口
export function getCategoryList() {
  return request.get("/category/list");
}

// 商品列表接口
export function getGoodsList() {
  return request.get("/goods/list");
}

// 商品相册接口
export function getGoodsAlbum(params) {
  return request.get('/goods/album', { params })
 }

// 商品详情接口
export function getGoodsDetail(params) {
  return request.get('/goods', { params })
}

// 购物车接口
export function getCartList(params) {
  return request.get('/cart', { params })
}