import request from '@neosjs/request'
export const baseRequest = async (path, params, headers) => {
  const res = await request({
    method: 'POST',
    url: `${path}`,
    timeout: 60000,
    headers,
    params
  })
  return res
}
