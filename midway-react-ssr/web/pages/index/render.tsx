import React, { useContext } from 'react'
import { SProps, IContext } from 'ssr-types'
import Slider from '@/components/slider'
import Rectangle from '@/components/rectangle'
import Search from '@/components/search'
import { IData } from '@/interface'

export default (props: SProps) => {
  const { state, dispatch } = useContext<IContext<IData>>(window.STORE_CONTEXT)
  return (
    <div>
      {/* a标签就走服务端渲染 */}
      <a href="/detail/cbba934b14f747049187">click here is a </a>
      <Search></Search>
      {
        state?.indexData?.data?.[0]?.components ? <div>
          <Slider {...props} data={state.indexData.data[0].components} />
          <Rectangle {...props} data={state.indexData.data[1].components} />
        </div> : <img src='https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif' className='loading' />
      }
    </div>
  )
}
