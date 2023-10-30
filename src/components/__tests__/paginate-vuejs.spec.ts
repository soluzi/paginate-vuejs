import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import PaginateVuejs from '../paginate-vuejs.vue'

describe('PaginateVuejs', () => {
  it('Check if text content is correct in bootstrap style', () => {
    const wrapper = shallowMount(PaginateVuejs, {
      props: {
        total: 100,
        perPage: 10,
      }
    })

    expect(wrapper.find('li:first-child').text()).toMatch('Previous')
  })
})
