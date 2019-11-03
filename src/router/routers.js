const routers = [
  {
    path: "/algorithm/bubbleSort",
    name: "冒泡排序",
    component: () => import("../views/algorithm/bubbleSort"/* webpackChunkName: "algorithm-bubble-sort" */ )
  }
]
export default routers