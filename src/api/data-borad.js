import uidRequest from '@/utils/borad'

// 批量获取uid链接
export function bulkAcquisition() {
  return uidRequest({
    url: '/uid/get',
    method: 'get'
  })
}

// 获取一个uid链接
export function getOneUid() {
  var options = {
    method: 'get',
    url: '/uid/get'
  }

  return uidRequest(options, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 闲置的uid数量
export function getIdledUids() {
  var options = {
    method: 'get',
    url: '/uid/idle'
  }

  return uidRequest(options, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 使用中的uid数量
export function getUsedUids() {
  var options = {
    method: 'get',
    url: 'uid/used'
  }

  return uidRequest(options, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// 获取uid总数

// 获取月销量（暂时不做）

