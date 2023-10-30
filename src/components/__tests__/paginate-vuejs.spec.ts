import { describe, it, expect } from 'vitest'

import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import PaginateVuejs from '../paginate-vuejs.vue'

describe('PaginateVuejs', () => {
  it('Check if content is correct', () => {

    const wrapper = mount(PaginateVuejs, {
      props: {
        total: 100,
        perPage: 10,
        type: 'link',
        pageContainerClass: 'containers',
        pageItemClass: 'page__item',
        pageLinkClass: 'page__link',
        firstBtnClass: 'first__button',
        lastBtnClass: 'last__button',
        nextBtnClass: 'next__button',
        prevBtnClass: 'prev__button',
        ellipsisClass: 'pagination__ellipsis',
        startEllipsisClass: 'start__ellipsis',
        endEllipsisClass: 'end__ellipsis',
        showFirstButton: true,
        showLastButton: true,
      },
      slots: {
        firstBtn: '&lt;&lt;',
        lastBtn: '&gt;&gt;',
        prevBtn: 'Previous',
        nextBtn: 'Next',
        ellipsisText: '---',
      }
    })

    expect(wrapper.find('ul').classes('containers')).toBe(true)
    expect(wrapper.find('li').classes('page__item')).toBe(true)
    expect(wrapper.find('li a').classes('page__link')).toBe(true)

    expect(wrapper.find('.first__button').text()).toBe('<<')
    expect(wrapper.find('.last__button').text()).toBe('>>')
    expect(wrapper.find('.prev__button').text()).toBe('Previous');
    expect(wrapper.find('.next__button').text()).toBe('Next');
    expect(wrapper.find('.next__button').text()).toBe('Next');
    expect(wrapper.find('.pagination__ellipsis').text()).toBe('---');
  })

  it('The ending ellipsis should only be rendered when the pagination is at the very beginning.', () => {
    const currentPageRef = ref(1);

    const wrapper = mount(PaginateVuejs, {
      props: {
        total: 100,
        currentPage: currentPageRef.value,
        startEllipsisClass: 'start__ellipsis',
        endEllipsisClass: 'end__ellipsis',
      },
    })
    
    expect(wrapper.find('.start__ellipsis').exists()).toBeFalsy();
    expect(wrapper.find('.end__ellipsis').exists()).toBeTruthy();
  })

  it('Both ellipsis buttons should be displayed in the pagination when it is in the middle.', () => {
    const currentPageRef = ref(5);

    const wrapper = mount(PaginateVuejs, {
      propsData: {
        total: 100,
        currentPage: currentPageRef.value,
        startEllipsisClass: 'start__ellipsis',
        endEllipsisClass: 'end__ellipsis',
      },
    });

    expect(wrapper.find('.start__ellipsis').exists()).toBeTruthy();
    expect(wrapper.find('.end__ellipsis').exists()).toBeTruthy();
  });

  it('The starting ellipsis should only be rendered when the pagination is at the very beginning.', () => {
    const currentPageRef = ref(10);

    const wrapper = mount(PaginateVuejs, {
      propsData: {
        total: 100,
        currentPage: currentPageRef.value,
        startEllipsisClass: 'start__ellipsis',
        endEllipsisClass: 'end__ellipsis',
      },
    });

    expect(wrapper.find('.start__ellipsis').exists()).toBeTruthy();
    expect(wrapper.find('.end__ellipsis').exists()).toBeFalsy();
  });

  it('should render 8 number buttons when siblingCount is set to 2', () => {
    const currentPageRef = ref(1);
    const wrapper = mount(PaginateVuejs, {
      propsData: {
        total: 100,
        currentPage: currentPageRef.value,
        siblingCount: 2
      },
    });
    expect(wrapper.find('.number-button').exists()).toBeTruthy();
    
    expect(wrapper.findAll('.number-button').length).toBe(8);
  });

  it('should render 8 number buttons when boundaryCount is set to 2', () => {
    const currentPageRef = ref(1);
    const wrapper = mount(PaginateVuejs, {
      propsData: {
        total: 100,
        currentPage: currentPageRef.value,
        boundaryCount: 2
      },
    });
    expect(wrapper.find('.number-button').exists()).toBeTruthy();
    
    expect(wrapper.findAll('.number-button').length).toBe(8);
  });

  it('should render 6 number buttons when siblingCount is set to 0 and boundaryCount is set to 2', () => {
    const currentPageRef = ref(1);
    const wrapper = mount(PaginateVuejs, {
      propsData: {
        total: 100,
        currentPage: currentPageRef.value,
        siblingCount: 0,
        boundaryCount: 2
      },
    });
    expect(wrapper.find('.number-button').exists()).toBeTruthy();
    
    expect(wrapper.findAll('.number-button').length).toBe(6);
  });
})