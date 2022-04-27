import { mount } from '@vue/test-utils'
import Sticker from '@/components/Sticker.vue'

describe('Sticker', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Sticker)
    expect(wrapper.vm).toBeTruthy()
  })
})
