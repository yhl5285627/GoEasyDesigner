import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import 组件数据 from '@/stores/组件数据.json';
import {WindowSetSize,WindowSetTitle} from "../../wailsjs/runtime"; // 根据实际文件路径进行修改
import {绑定窗口事件} from '@/stores/窗口事件'

export const 引入窗口数据 = defineStore('窗口数据', {
    state: () => {
        let data = {}
        data.组件列表 = ref([])
        data.组件 = 组件数据
        return data
    },
    actions: {
        初始化() {
            let 组件列表 = []
            for (var key in 组件数据) {
                if (key == "窗口") {
                    continue
                }
                组件列表.push(组件数据[key])
            }
            this.组件列表 = 组件列表
            绑定窗口事件(this)
            try {
                this.窗口创建完毕()
            }   catch (e) {
                console.log("窗口创建完毕事件未定义")
            }

            try {
                console.log(window.navigator)
                if (window.navigator && window.navigator.appVersion && window.navigator.appVersion.indexOf("Mac") !== -1) {
                    console.log("macOS system.");
                    WindowSetSize(parseInt(this.组件.窗口.宽度), parseInt(this.组件.窗口.高度)+28)

                } else {
                    console.log("window");
                    WindowSetSize(parseInt(this.组件.窗口.宽度) + 13, parseInt(this.组件.窗口.高度) + 35)

                }
                WindowSetTitle(this.组件.窗口.标题)
            } catch (e) {

            }
        },
        取窗口样式() {
            const result = {}
            result['width'] = this.组件.窗口.宽度 + "px"
            result['height'] = this.组件.窗口.高度 + "px"
            return result
        },
        取组件样式(style) {
            const result = {}
            result['width'] = style['width'] + "px"
            result['height'] = style['height'] + "px"
            result['top'] = style['top'] + "px"
            result['left'] = style['left'] + "px"
            return result
        },
        组件点击(e, index) {
            if (this.组件列表[index].事件被单击 == "" || this.组件列表[index].事件被单击 == undefined) {
                return
            }
            let 动态脚本 = "this." + this.组件列表[index].事件被单击 + "()"
            try {
                eval(动态脚本)
            } catch (e) {
                console.log("调用未定义函数", this.组件列表[index].事件被单击)
            }
        }
    },
})