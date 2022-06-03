import { mount } from '@vue/test-utils'
import NewPost from '@/components/NewPost.vue'

describe('NewPost', () => {
  const wrapper = mount(NewPost)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('accepts click events', async () => {
    await wrapper.find('button').trigger('click')
  })

  test('pre tag exists', () => {
    expect(wrapper.contains('pre')).toBe(true)
  })

  test('svg icon exists', () => {
    expect(wrapper.contains('svg')).toBe(true)
  })

  test('code tag does not exist', () => {
    expect(wrapper.contains('code')).toBe(false)
  })
})
