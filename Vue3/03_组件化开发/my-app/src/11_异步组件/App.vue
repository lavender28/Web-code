<template>
  <div>
    123
    <!-- <MyCpn></MyCpn> -->
    <!-- <AsyncComp></AsyncComp> -->
     
    <!-- Suspense 组件 与 异步组件 -->
    <Suspense>
      <template #default>
        <AsyncComp></AsyncComp>
      </template>
      <template #fallback>
        LoadingComponent
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import MyCpn from './MyCpn.vue';
import LoadingComponent from './LoadingComponent.vue';
import ErrorComponent from './ErrorComponent.vue';

export default {
  components: {
    // AsyncComp: defineAsyncComponent(() => 
    //   import('./MyCpn.vue')
    // )
    AsyncComp: defineAsyncComponent({
      loader: () => import('./MyCpn.vue'),
      // 加载异步组件时使用的组件
      loadingComponent: LoadingComponent,
      // 加载失败后展示的组件
      errorComponent: ErrorComponent,
    })
  }
}
</script>

<style scoped>

</style>