const allRightText = ['Perfect', 'Fantastic', 'Great Work', 'Excellent']
// const halfRightText = 'You are almost there'
// const worngText = 'Try it next time'
// export { getQuery, isAndroid, isPC, sleep }

// export { getQuery, isAndroid, isPC, sleep } from 'utils/util'

export const showRightText = () => {
  return allRightText[parseInt(Math.random() * 4, 10)]
}
