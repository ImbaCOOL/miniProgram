const {
  apiServer
} = require('../config/index')
const axios = require('../utils/axios')
module.exports = {
  getCategoryList() {
    let url = apiServer + '/kind'
    return axios.get(url)
  },
  getProductList(categoryId) {
    let url = apiServer + `/goods/${categoryId}/kind`
    return axios.get(url, {
      page: 1,
      pageSize: 1000
    })
  },
}