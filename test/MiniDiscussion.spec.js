import { mount } from '@vue/test-utils'
import MiniDiscussion from '@/components/MiniDiscussion.vue'

describe('MiniDiscussion', () => {
  const wrapper = mount(MiniDiscussion)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts custom author', async () => {
    await wrapper.setProps({
      author: "Mahdi Khashan"
    })

    expect(wrapper.text()).toContain('Mahdi Khashan')
  })

})
