import '@babel/polyfill'

function page2() {
  let element = document.createElement('div')
  element.innerHTML = '我是第二个入口文件'
  return element
}

document.querySelector('#root').appendChild(page2())