/**
 * 在一个文件中export可以有多个,但是export default只能有一个
 * 在使用export导出文件使用时需要加{ 变量名 },export default则不需要
 * 注意使用export default时需要在变量定义之后再导出, export则不需要
 */

// export {
//   name
// }
// name = 1;

const storage = {
  save: (type, key, val) => {
    val = encodeURIComponent(JSON.stringify(val))
    switch (type) {
      case 'local':
        localStorage.setItem(key, val)
        break
      case 'session':
        sessionStorage.setItem(key, val)
        break
      default:
        alert('参数错误')
        break
    }
  },
  get: (type, key) => {
    var val = null
    switch (type) {
      case 'local':
        val = localStorage.getItem(key)
        break
      case 'session':
        val = sessionStorage.getItem(key)
        break
      default:
        alert('参数错误')
        break
    }
    if (val !== null && val !== 'undefined') {
      return JSON.parse(decodeURIComponent(val))
    } else {
      return null
    }
  },
  del: (type, key) => {
    switch (type) {
      case 'local':
        localStorage.removeItem(key)
        break
      case 'session':
        sessionStorage.removeItem(key)
        break
      default:
        this.$message.error('参数错误')
        break
    }
  }
}

export default storage
