import { getAxios } from './axios'

export const api = getAxios()
export const getAPIClient = ctx => getAxios(ctx)
