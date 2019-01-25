import React from 'react'
import ReactDOM from 'react-dom'
import CustomSnackbar from '../components/Snackbars'

/**
 * 判断是否是携带 https
 * @param {String} url
 */
export const isUrl = function(url) {
  const patt = /https?/
  return patt.test(url)
}

/**
 * 显示Snackbar
 * @param {Object} options {message: '', type: '', duration: 2000}
 */
export function showToast(options) {
  ReactDOM.render(<CustomSnackbar {...options} />, document.getElementById('snackbar-container'))
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('snackbar-container'))
  }, options.duration || 2000)
}
