// import { baseRequest } from 'utils/request'
import request from '@neosjs/request'
const baseRequest = async (path, params, headers) => {
  const res = await request({
    method: 'POST',
    url: `${path}`,
    timeout: 60000,
    headers,
    params
  })
  return res
}

// 提交数据
export const submitUserAnswer = async (params, headers, requestUrl) => {
  const path = requestUrl + '/classroom-hub/question/student/game/submit'
  return await baseRequest(path, params, headers)
}

/**
 * 上报数据
 * @param {*} type
 * @param {*} params
 * @param {*} headers
 * @param {*} requestUrl
 */
export const interactReport = async (type, params, headers, requestUrl) => {
  let path
  if (type === 'open') {
    path = requestUrl + '/classroom-hub/classroom/student/interact/partakereport'
  } else {
    path = requestUrl + '/classroom-hub/question/student/game/close'
  }
  return await baseRequest(path, params, headers)
}
