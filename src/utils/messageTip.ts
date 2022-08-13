/**
 * 弹出提示信息
 * @param {string} message 提示信息
 */
export function showToast(message = '未知错误') {
  uni.showToast({
    title: message,
    icon: 'none',
    mask: true,
  })
}
