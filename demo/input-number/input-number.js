/*
 * @Author: DevZhang 
 * @Date: 2019-06-05 16:37:54 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-14 13:40:26
 */

// 判断是否为数字
function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}

// 数字输入框组件
Vue.component('input-number', {
    template: `
        <div class="input-number">
            <input
                type="text"
                @keyup.down="handleDown"
                @keyup.up="handleUp"
                :value="currentValue"
                @change="handleChange">
            <button
                @click="handleDown"
                :disabled="currentValue <= min">-</button>
            <button
                @click.down="handleUp"
                :disabled="currentValue >= max">+</button>
        </div>`,
        // 组件 props
        props: {
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number,
                default: -Infinity
            },
            value: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        // 观察探测当前值是否变化
        watch: {
            currentValue(val) {
                this.$emit('input', val);
                this.$emit('on-change', val);
            },
            value(val) {
                this.updateValue(val);
            }
        },
        methods: {
            // 更新当前值
            updateValue(val) {
                if (val > this.max) val = this.max;
                if (val < this.min) val = this.min;
                this.currentValue = val;
            },
            // 按下减号或者方向键下的事件
            handleDown() {
                if (this.currentValue <= this.min) return;
                this.currentValue -= 1;
            },
            // 按下加号或者方向键上的事件
            handleUp() {
                if (this.currentValue >= this.max) return;
                this.currentValue += 1;
            },
            // 监听input变化事件
            handleChange(event) {
                let val = event.target.value.trim();
                let max = this.max;
                let min = this.min;

                if (isValueNumber(val)) {
                    val = Number(val);
                    this.currentValue = val;

                    if (val > max) {
                        this.currentValue = max;
                    } else if (val < min) {
                        this.currentValue = min;
                    }
                } else {
                    event.target.value = this.currentValue;
                }
            }
        },
        mounted () {
            // 更新当前值
            this.updateValue(this.value);
        }
});