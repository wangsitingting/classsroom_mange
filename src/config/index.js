// 按环境配置：
const env = process.env.WEB_ENV || 'development';

const base = 'http://vincent315.natapp1.cc';

export const domains = {
  production: {
    admin: 'http://101.124.15.81'
  },
  development: {
    admin: 'http://101.124.15.81',
    usercenter: `${base}/usercenter`,
    // 日志
    logmanagement: `${base}/user`,
    // logmanagement: 'http://10.13.49.71:9082',
    // 权限
    permission: `${base}/permission`
  }
}[env];

// 代码高亮通用配置
export const CODE_MIRROR_OPTION = {
  editor: {
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
    extraKeys: { 'Ctrl-Space': 'autocomplete' }
  },
  beautify: {
    lineNumbers: true,
    matchBrackets: true,
    readOnly: 'nocursor',
  }
};

// {url}/user/login
//  URL= http://platform.backend.urban-computing.cn