// 思路：
// 1. 看官方文档 把echarts加入项目
/**
 * 如何在react中获取dom -> useRef
 * 在什么地方获取Dom节点 -> useEffect
 */

// 2. 不抽离定制化的参数 先把最小化的demo跑起来
// 3. 按照需求，哪些参数需要自定义 抽象出来

const Home = () => {

  return (
    <div>
      {/* 准备一个挂载节点 */}
      <div ref={domRef}></div>
    </div>
  )
}

export default Home
