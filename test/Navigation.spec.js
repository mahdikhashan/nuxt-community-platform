import { mount } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'

describe('Navigation', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navigation)
    expect(wrapper.vm).toBeTruthy()
  })
})
