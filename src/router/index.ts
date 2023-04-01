import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import VOn from '../views/VOn.vue'
import VBind from '../views/VBind.vue'
import VIfAndVFor from '../views/VIfAndVFor.vue'
import VModel from '../views/VModel.vue'
import SimpleComponent from '../views/SimpleComponent.vue'
import FetchData from '../views/FetchData.vue'
import TreeView from '../views/TreeView.vue'
import TodoMVS from '../views/TodoMVS.vue'
import CrudSample from '../views/CrudSample.vue'
import PlaySample from '../views/PlaySample.vue'
import EmitSample from '../views/EmitSample.vue'
import VModelSample from '../views/VModelSample.vue'
import ComputedSample from '../views/ComputedSample.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/hello-world',
    name: '',
    component: HelloWorld
  },
  {
    path: '/v-on',
    name: '',
    component: VOn
  },
  {
    path: '/v-bind',
    name: '',
    component: VBind
  },
  {
    path: '/v-if',
    name: '',
    component: VIfAndVFor
  },
  {
    path: '/v-model',
    name: '',
    component: VModel
  },
  {
    path: '/simple-component',
    name: '',
    component: SimpleComponent
  },
  {
    path: '/fetch-data',
    name: '',
    component: FetchData
  },
  {
    path: '/tree',
    name: '',
    component: TreeView
  },
  {
    path: '/todo',
    name: '',
    component: TodoMVS
  },
  {
    path: '/crud',
    name: '',
    component: CrudSample
  },
  {
    path: '/playsample',
    name: '',
    component: PlaySample
  },
  {
    path: '/emit',
    name: '',
    component: EmitSample
  },
  {
    path: '/vmodel-component',
    name: '',
    component: VModelSample
  },
  {
    path: '/computed',
    name: '',
    component: ComputedSample
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
