//Math.max
const array = [1,2,3,4,5]
// 两种方法
const res = Math.max(...array)

const res1 = Math.max.apply(null,array)

// reduce
function get(array){
    return array.reduce((prev,current) =>{
        // 目前项大于上一项就返回目前项
        return current>prev ? current : prev
    })
}
const res = get(array);

//sort排序
function get(array){
    // 默认就是从小到大
    const res = array.sort();
    return res[res.length-1]
}