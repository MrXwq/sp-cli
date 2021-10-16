// 通过 axios 处理请求
const axios = require('axios')

axios.interceptors.response.use(res => {
    return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
// 这里是去你自己的组织里面的项目，不是你自己下面的项目，如果没有创建组织，需要先创建
async function getRepoList() {
    return axios.get('https://api.github.com/orgs/New-migrant-workers/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
    return axios.get(`https://api.github.com/repos/New-migrant-workers/${repo}/tags`)
}

module.exports = {
    getRepoList,
    getTagList
}
