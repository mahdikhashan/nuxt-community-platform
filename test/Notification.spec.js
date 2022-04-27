import { mount } from '@vue/test-utils'
import Notification from '@/components/Notification.vue'

describe('Notification', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Notification)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
