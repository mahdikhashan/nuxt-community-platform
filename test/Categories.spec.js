import { mount } from '@vue/test-utils'
import Categories from '@/components/Categories.vue'

describe('Categories', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Categories)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
