import uidRequest from '@/utils/borad'

// 批量获取uid链接
export function bulkAcquisition() {
  var config = {
    method: 'get',
    url: '/uid/getBatch',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return uidRequest(config, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 获取一个uid链接
export function getOneUid() {
  var config = {
    method: 'get',
    url: '/uid/get',
    headers: {
      'Content-Type': 'application/json'
    }

  }
  return uidRequest(config, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 闲置的uid数量
export function getIdledUids() {
  var config = {
    method: 'get',
    url: '/uid/idle',
    headers: {
      'Content-Type': 'application/json'
    }

  }
  return uidRequest(config, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 使用中的uid数量
export function getUsedUids() {
  var config = {
    method: 'get',
    url: '/uid/used',
    headers: {
      'Content-Type': 'application/json'
    }

  }
  return uidRequest(config, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 获取uid总数

// 获取月销量（暂时不做）

