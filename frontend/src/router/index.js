import { createRouter, createWebHistory } from 'vue-router'
import AssetList from '../views/AssetList.vue'
import UploadAsset from '../views/UploadAsset.vue'

const routes = [
  {
    path: '/',
    name: 'assets',
    component: AssetList
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadAsset
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router