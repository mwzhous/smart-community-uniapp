import http from "@/lib/http";

const port = '8089/api'

// 账号密码登录
export function passwordLogin(data) {
	return http.post(port + "/account/login", data);
}

// 验证码发送
export function codeSend(data) {
	return http.get(port +"/code", data);
}

// 短信验证码登录
export function codeLogin(data) {
	return http.post(port +"/phone/login", data);
}
 
// 重置密码
export function resetPassword(data) {
	return http.post(port +"/password/reset", data);
}

// 获取登录用户信息
export function getUserInfo() {
	return http.get(port +"/info");
}