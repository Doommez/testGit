import {createRouter, createWebHashHistory} from 'vue-router';
import AppSecond from './components/AppSecond.vue';
import AppFirst from './components/AppFirst.vue';
import AppThree from './components/AppThree.vue';
import AppSecondChildren from './components/AppSecondChildren.vue';
import App404Error from './components/App404Error.vue';
import AppDataFetching from './components/AppDataFetching.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/hello',
      name: 'home',
      component: AppFirst,
    },
    {
      path: '/second/:id/:count',
      component: AppSecond,
      children: [
        {
          path: '',
          component: AppSecondChildren,

        },
      ],
    },
    {
      path: '/three',
      component: AppThree,
    },
    {
      path: '/:pathMatch(.*)*',
      component: App404Error,
    },
    {
      path: '/dataFetching',
      component: AppDataFetching,
    },
  ],
});
