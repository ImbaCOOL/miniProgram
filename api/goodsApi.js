const {
  apiServer
} = require('../config/index')
const axios = require('../utils/axios')
module.exports = {
  getGoodsInfo(id) {
    let url = apiServer + '/goods/' + id
    return axios.get(url)
  }
}