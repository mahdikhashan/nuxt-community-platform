import { mount } from '@vue/test-utils'
import Banner from '@/components/Banner.vue'

const BannerTitle = "Community Platform"
const BannerSubtitle = "Answers to all your Expensify questions."
const SearchBtn = "Search"

describe('Banner', () => {

    const wrapper = mount(Banner)

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('to contain Banner Title', () => {
        expect(wrapper.text()).toContain(BannerTitle)
    })

    test('to contain Banner Subtitle', () => {
        expect(wrapper.text()).toContain(BannerSubtitle)
    })

    test('to contain Search label of the button', () => {
        expect(wrapper.text()).toContain(SearchBtn)
    })

})