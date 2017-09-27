import { get } from '../get'

export function getAdData() {
    const result = get('/mock/indexList')
    return result
}