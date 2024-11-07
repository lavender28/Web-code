<template>
  <div>
    <CitySelector @city-selected="fetchWeatherDetails"></CitySelector>
    <component :is="asyncWeatherDetails" :weather="weather"></component>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, shallowRef } from 'vue'
import CitySelector from './CitySelector.vue';
import LoadingComponent from './LoadingComponent.vue';
import ErrorComponent from './ErrorComponent.vue';

let weather = ref('')
let asyncWeatherDetails = shallowRef(null)
const weatherData = {
  Beijing: { city: '北京', temperature: 20, description: '晴' },
  Shanghai: { city: '上海', temperature: 22, description: '多云' },
  Shenzhen: { city: '深圳', temperature: 26, description: '多云转晴' },
  Guangzhou: { city: '广州', temperature: 28, description: '阴' },
};

function fetchWeatherDetails(city) {
  weather.value = weatherData[city];
  asyncWeatherDetails.value = defineAsyncComponent({
    loader: () => {
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(import('./WeatherDetail.vue'));
          // reject(new Error('加载失败'));
        }, 5000)
      })
    },
    loadingComponent: LoadingComponent,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000
  });
}

</script>
