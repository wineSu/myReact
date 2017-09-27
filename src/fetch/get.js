import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
	// var result = fetch('http://www.mockhttp.cn'+url, { //打包apk时候使用
	var result = fetch(''+url, {
		credentails: 'include',
		mode: "cors",
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	return result;
}