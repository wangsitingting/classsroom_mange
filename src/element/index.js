// 导入自己需要的组件
import { Form, Input, FormItem, Radio, Button } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Form)
    Vue.use(Input)
    Vue.use(FormItem)
    Vue.use(Radio)
    Vue.use(Button)
  }
}
export default element