import { mount } from '@vue/test-utils'
import MiniDiscussion from '@/components/MiniDiscussion.vue'

describe('MiniDiscussion', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MiniDiscussion)
    expect(wrapper.vm).toBeTruthy()
  })
})
