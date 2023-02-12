// import Cookies from 'js-cookie'


// const TokenKey = 'Admin-Token'
const TokenKey = 'Authorization'

export function getToken() {
  // return Cookies.get(TokenKey)
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
  // return Cookies.remove(TokenKey)
}
