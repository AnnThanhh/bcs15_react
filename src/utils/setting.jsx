import axios from "axios";

export const TOKEN = "accessTOKEN";
export const USER_LOGIN = "userLogin";

export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

//setup interceptor (middleware) cho tất các request(thông tin được gửi đi đến server) và response (kết quả nhận từ server)
const DOMAIN = "https://apistore.cybersoft.edu.vn";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUZXN0aW5nIDA0IiwiSGV0SGFuU3RyaW5nIjoiMDEvMTIvMjAyNSIsIkhldEhhblRpbWUiOiIxNzY0NTQ3MjAwMDAwIiwibmJmIjoxNzQwNTg5MjAwLCJleHAiOjE3NjQ2OTQ4MDB9.0mXLU2vygmpCOgJ_EA-Lr0C7fYh7fPC6gSUzVDLlrmg";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000, // giới hạn thời gian chờ kết quả
});

//cấu hình cho request
http.interceptors.request.use((req) => {
  req.headers = {
    //giữ lại các api có header
    ...req.headers,
    //thêm phần chung authorize
    Authorization: localStorage.getItem(TOKEN),
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
  return req;
});


//cầu hình cho response

/**
 * status code
 * 200: thành công 
 * 201: dữ liệu đã được khởi tạo thành công
 * 
 * 400: bad request (đường dẫn không hợp lệ)
 * 401: unauthorize(lỗi không quyền truy cập vào api đso)
 * 404: Not found (không tìm thấy dữ liệu)
 * 403: Forbidden (không đủ quyền truy cập vào hệ thống) role
 * 
 * 500: error in server (lỗi xảy ra tại server chưa biết lí do) 
 * => vai trò frontend với lỗi 500:
 *  +test lại api qua postman hoặc swagger với dữ liệu mẫu từ backend(BE đúng thì coi lại code). Nếu như postman hay swagger bị sai thì báo backend xử lý 
 */

