import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'

// 定义并暴露一个 store
// export const useCounterStore = defineStore('counter', {
//   // 状态：存储共享数据
//   state: () => ({ 
//     count: 0,
//     age: 18,
//     name: '张三',
//     dataList: []
//   }),
//   // 计算：派生状态
//   getters: {
//     countStatus: (state) => {
//       if (state.count === 0) return '空值';
//       if (state.count >0 ) return '正数';
//       return '负数'
//     }
//   },
//   // 方法（动作）：修改状态的方法
//   actions: {
//     increment(value) {
//       this.count += value
//     },
//     decrement(value) {
//       this.count -= value
//     },
//     async fetchData() {
//       try {
//         const res = await axios.get('http://geek.itheima.net/v1_0/channels');
//         this.dataList = res.data.data.channels;
//       } catch(error) {
//         console.error('Error fetching channels:', error);
//       }
//     }
//   }
// })

// store 组合式写法
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const dataList = ref([])
  const countStatus = computed(() => {
    if (count.value === 0) return '空值';
    if (count.value >0 ) return '正数';
    return '负数'
  })
  const increment = (value) => {
    count.value += value
  }
  const decrement = (value) => {
    count.value -= value
  }
  const fetchData = async () => {
    try {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels');
      console.log(res.data.data.channels)
      dataList.value = res.data.data.channels
    } catch(error) {
      console.error('Error fetching channels:', error);
    }
  }

  return { count, dataList, countStatus, increment, decrement, fetchData }
})