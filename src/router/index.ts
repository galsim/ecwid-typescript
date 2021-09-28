import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ROUTE_NAME from '@/router/route-name'

import Products from '../views/Products.vue'
import ProductItem from '../views/ProductItem.vue'
import Basket from '../views/Basket.vue'
import PageNotFound from '../views/PageNotFound.vue'

const validateNumberParam = (param: any): boolean => {
  return !!Number(param) || Number(param) === 0
}

const validateNotRequiredNumberParams = (param: any): boolean => {
  if (!param) return true

  return !!Number(param) || Number(param) === 0
}

const routes: RouteRecordRaw[] = [
  {
    path: '/:categoryId?',
    name: ROUTE_NAME.MAIN,
    component: Products,
    beforeEnter (to, from, next) {
      const isValid = validateNotRequiredNumberParams(to.params.categoryId)
      if (isValid) {
        next()
      } else {
        next({
          name: ROUTE_NAME.PAGE_404
        })
      }
    }
  },

  {
    path: '/product/:productId',
    name: ROUTE_NAME.PRODUCT_ITEM,
    component: ProductItem,
    beforeEnter (to, from, next) {
      const isValid = validateNumberParam(to.params.productId)
      if (isValid) {
        next()
      } else {
        next({
          name: ROUTE_NAME.PAGE_404
        })
      }
    }
  },

  {
    path: '/basket',
    name: ROUTE_NAME.BASKET,
    component: Basket
  },

  {
    path: '/404',
    name: ROUTE_NAME.PAGE_404,
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
