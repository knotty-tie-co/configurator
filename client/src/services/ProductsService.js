import Api from '@/services/Api'

export default {

  addProduct (params) {
    return Api().post('products', params)
  }
}
