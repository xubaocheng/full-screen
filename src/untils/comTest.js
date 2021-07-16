
import { ref, onMounted } from 'vue'
export function testfn () {
  const num = ref(0)

  const firstFn = () => {
    num.value++
  }
  onMounted(() => {
    console.log('mounted 生命周期')
  })
  // ue4 调用web 定义的方法 myfn 为ue4 的函数名
  ue.interface.myfn = function(fps){
    alert('触发')
    num.value = 1000
  };
  // web 调用ue4的方法
  const webToue4 = () => {
    ue4('Cunwu') // 'Cunwu' 为 ue4 定义的方法名
  }
  console.log(ue)
  return {
    num,
    firstFn,
    webToue4
  }
}
