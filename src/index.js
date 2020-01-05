import '@babel/polyfill'
import './css/index.css'
import './scss/test.scss'

const hello = require('./hello')
document.querySelector('#root').appendChild(hello())