import datarequest from './datarequest'

export const getmicsinfo = () => datarequest({
    url: '/api/v1/mouse/', method: 'get'
})

export const postcagetype = (cagetype) => datarequest({
    url: '/api/v1/cage/position/' + cagetype, method: 'post'
})

//获取笼子信息
export const getcagelist = (querydata) => datarequest({
    url: '/api/v1/cage/', method: 'get', query: querydata
})

export const getallcageinfo = () => datarequest({
    url: '/api/v1/cage/overallStats', method: 'get'
})

export const gethouseinfo = () => datarequest({
    url: '/api/v1/cage/houseUsages', method: 'get'
})


export const postnewcage = (cagetype, data) => datarequest({
    url: '/api/v1/cage/' + cagetype, method: 'post', data: data
})

//绑定笼和实验项目
export const postnewcageandexp = (cagetype, expid, data) => datarequest({
    url: '/api/v1/cage/' + cagetype + '/' + expid, method: 'post', data: data
})
//获取未确定位置实验信息
export const getunsetcage = () => datarequest({
    url: '/api/v1/cage/unset', method: 'get'
})
//获取所有模板信息
export const getcagetype = (cagetype) => datarequest({
    url: '/api/v1/config/all/' + cagetype, method: 'get'
})
//新建实验项目
export const createexp = (data) => datarequest({
    url: '/api/v1/experiment/', method: 'post', data: data
})

//获取某个项目下的实验列表
export const gettasklist = (querydata) => datarequest({
    url: '/api/v1/experiment', method: 'get', params: { 'project_id': 'test' }
})

// 导入笼位
export const importcageinfo = (data) => datarequest({
    url: '/api/v1/cage/import', method: 'post', data: data
})

//导入小鼠信息
export const importmiceinfo = (data) => datarequest({
    url: '/api/v1/mouse/import', method: 'post', data: data
})

//转移任务
export const transfertask = (data) => datarequest({
    url: '/api/v1/mouse/move', method: 'post', data: data
})

//淘汰
export const disusemice = (data)=>datarequest({
    url: '/api/v1/mouse/disuse',method:'post',data:data
})