import { getAPIClient } from './axios'

export const api = getAPIClient()
export const getSSRAPIClient = ctx => getAPIClient(ctx)
