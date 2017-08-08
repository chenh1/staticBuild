import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
    test('renders Footer', () => {
        const tree = renderer.create(<Footer />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('icon should change image src on mouse over', () => {
        //arrange
        const wrapper = shallow(<Footer />);
        const currentClass = wrapper.find('a[data-index=1]').find('img').classList;
        wrapper.state = {
            icons: [
                {
                    alt: "email",
                    link: "#",
                    imageSrc: '/mockSrc0',
                    regularImageSrc: '/mockSrc0',
                    hoverImageSrc: '/mockSrcHover0'
                },
                {
                    alt: "mockIcon",
                    link: "/mockLink",
                    imageSrc: '/mockSrc1',
                    regularImageSrc: '/mockSrc1',
                    hoverImageSrc: '/mockSrcHover1'
                }
            ]
        };

        //act
        wrapper.find('a[data-index=1]')
            .simulate('mouseover', {currentTarget: {getAttribute: () => 1}});

        //assert
        expect(wrapper.state.icons[1].imageSrc).toEqual('');
    })
});