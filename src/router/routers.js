
const routers = [
  {
    path: '/bubbleSort',
    name: '冒泡排序',
    component: () => import('../views/algorithm/bubbleSort'/* webpackChunkName: "algorithm-bubble-sort" */)
  },
  {
    path: '/insertSort',
    name: '插入排序',
    component: () => import('../views/algorithm/insertSort'/* webpackChunkName: "algorithm-insert-sort" */)
  },
  {
    path: '/chooseSort',
    name: '选择排序',
    component: () => import('../views/algorithm/chooseSort'/* webpackChunkName: "algorithm-choose-sort" */)
  },
  {
    path: '/mergeSort',
    name: '归并排序',
    component: () => import('../views/algorithm/mergeSort'/* webpackChunkName: "algorithm-merge-sort" */)
  },
  {
    path: '/quickSort',
    name: '快速排序',
    component: () => import('../views/algorithm/quickSort'/* webpackChunkName: "algorithm-quick-sort" */)
  },
  {
    path: '/countSort',
    name: '快速排序',
    component: () => import('../views/algorithm/countSort'/* webpackChunkName: "algorithm-count-sort" */)
  },
  {
    path: '/bucketSort',
    name: '快速排序',
    component: () => import('../views/algorithm/bucketSort'/* webpackChunkName: "algorithm-bucket-sort" */)
  }
]
export default routers
