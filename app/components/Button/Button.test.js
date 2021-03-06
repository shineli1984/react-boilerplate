import Button from './Button.react';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Button href="http://mxstbr.com">
        { children }
      </Button>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should adopt the className', () => {
    const renderedComponent = shallow(<Button className="test" />);
    expect(renderedComponent.hasClass('test')).toEqual(true);
  });

  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = shallow(<Button href="http://mxstbr.com" />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render a Link if the route prop is specified', () => {
    const renderedComponent = shallow(<Button route="/" />);
    expect(renderedComponent.find('Link').length).toEqual(1);
  });

  it('should handle click events', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
