import { mount } from '@vue/test-utils'
import NewPost from '@/components/NewPost.vue'

describe('NewPost', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NewPost)
    expect(wrapper.vm).toBeTruthy()
  })
})
