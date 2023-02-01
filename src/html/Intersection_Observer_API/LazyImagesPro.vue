<!-- 
  描述：基于 IntersectionObserver 实现的 图片懒加载和无限滚动
  vue环境： vue3
  使用方式： 拷贝作为组件即可直接查看
  参考： https://juejin.cn/post/7067002674863931422
 -->
<template>
  <div class="lazy-content" ref="root">
    <div class="image-item-box" v-for="item in imageData" :key="item.id">
      <img
        class="observeImg"
        src="https://pic3.zhuanstatic.com/zhuanzh/5cad2d3f-61a8-4184-a0a3-5cd3bfea006e.png"
        :data-src="item.download_url"
        alt="正在加载"
        :key="item.id"
        width="400"
      />
    </div>
    <!-- 拓展一下: 监视该区域出现在交叉区，向服务器请求更多数据 -->
    <div ref="bottomBoxRef" class="bottom-text">
      <span v-if="pageNum < 20">正在为您加载更多...</span>
      <span v-else>加载完毕~</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, onUnmounted } from 'vue'

const step = 5
const pageNum = ref(0)
const imageData = ref([])
const bottomBoxRef = ref(null)
const root = ref(null)
const observer = ref(null)

async function getMoreData() {
  if (pageNum.value >= 20) {
    return
  }

  const response = await fetch(
    `https://picsum.photos/v2/list?limit=${step}&page=${pageNum.value}` 
  )
  let newData = await response.json()

  newData = newData.map(e => {
    return {
      ...e,
      download_url:
        e.download_url.split('/').slice(0, -2).join('/') + '/300/200',
    }
  })

  imageData.value = [...imageData.value, ...newData]

  if (pageNum.value) {
    addObserve()
  }

  pageNum.value += step
}

// 初始化监视器
function InitObserve() {
  observer.value = new IntersectionObserver(handlerObserve, {
    root: root.value,
    rootMargin: '0px 0px 200px 0px', // 监视区向下拓展200px
  })
  // 添加观察目标
  addObserve()
}

// 观察图片
async function observeImgs() {
  await nextTick()
  const list = document.querySelectorAll('.image-item-box')
  for (let i = 0; i < list.length; i++) {
    const element = list[i]
    observer.value.observe(element)
  }
}

// 观察底部加载文案
function observeImgsBottomBox() {
  observer.value.observe(bottomBoxRef.value)
}

// 添加观察目标
function addObserve() {
  observeImgs()
  observeImgsBottomBox()
}

// 处理监视器回调事件
function handlerObserve(entries) {
  entries.forEach(({ isIntersecting, target }) => {
    console.log('target', target, isIntersecting)
    // 处理 图片
    if (isIntersecting) {
      const targetImg = target.children[0]
      targetImg.src = targetImg.dataset.src
      // 修改过src属性之后，即可移除data-src属性并且取消监视
      observer.value.unobserve(target)
      // targetImg.removeAttribute('data-src')
    }

    // 处理 底部加载文案
    const isBottomBox = target === bottomBoxRef.value
    console.log('isBottomBox', isBottomBox)
    if (isBottomBox) {
      // isScrollBottom.value = isIntersecting

      if (isIntersecting) {
        console.log('加载下一页')
        getMoreData()
        observer.value.unobserve(bottomBoxRef.value)
      }
      
    }
  })
}

onMounted(async () => {
  await getMoreData()
  await nextTick()
  InitObserve()
})

// 关闭观察器
onUnmounted(() => {
  observer.value.disconnect()
})
</script>

<style scoped>
.lazy-content {
  width: 100%;
  height: 500px;
  overflow-y: auto;
}
.image-item-box {
  width: 400px;
  height: 267px;
  background: #ccc;
  margin: 0 auto 1px;
}
</style>
