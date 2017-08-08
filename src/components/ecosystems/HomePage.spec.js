import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage />', () => {
    test('clicking on hat should flip hat if it is not flipped already', () => {
        //arrange
        const wrapper = shallow(<HomePage />);
        expect(wrapper.find('#magicHatContainer').hasClass('spin-hat')).toEqual(false);
        expect(wrapper.find('.move-hat-over-empty-hat.empty-out-hat').isEmpty()).toEqual(true);
        expect(wrapper.find('.rabbit-move').isEmpty()).toEqual(true);
        expect(wrapper.find('.hidden').isEmpty()).toEqual(false);

        //act   
        wrapper.find('#magicHatContainer').simulate('click');

        //assert
        expect(wrapper.find('#magicHatContainer').hasClass('spin-hat')).toEqual(true);
        expect(wrapper.find('.move-hat-over-empty-hat.empty-out-hat').isEmpty()).toEqual(false);
        expect(wrapper.find('.rabbit-move').isEmpty()).toEqual(false);
        expect(wrapper.find('.hidden').isEmpty()).toEqual(true);
    });

    jest.useFakeTimers();

    test('after clicking hat, setTimeout should initiate to reset state', () => {
        //arrange
        const wrapper = shallow(<HomePage />);

        //act   
        wrapper.find('#magicHatContainer').simulate('click');
        jest.runTimersToTime(24000);

        //assert
        expect(wrapper.find('#magicHatContainer').hasClass('spin-hat')).toEqual(true);
    });
});