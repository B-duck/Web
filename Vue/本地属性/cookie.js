//写入
export const set = (name, value) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    document.cookie = cookieText;
};
//获取
export const get = (name) => {
    name = `${encodeURIComponent(name)}`;
    //分离cookie中的每项内容
    const cookies = document.cookie.split('; ')
}
