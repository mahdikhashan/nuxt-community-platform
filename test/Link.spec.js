import { mount } from '@vue/test-utils'
import Link from '@/components/Tag.vue'

describe('Link', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Link)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
