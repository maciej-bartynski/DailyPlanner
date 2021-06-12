import 'react-native';
import React from 'react';
import TaskCard from './taskCard';
// Note: test renderer must be required after react-native.
import TestRenderer, {act} from 'react-test-renderer';
import {Button, Text} from 'react-native';

describe('[components/TaskCard]', () => {
  it('Refreshes state on click.', () => {
    let rendered;
    act(() => {
      rendered = TestRenderer.create(<TaskCard />);
    });

    const instance = rendered.root;
    const button = instance.findByType(Button);
    const label = instance.findByProps({testID: 'label'});
    const firstLabel = label.props.children;

    act(() => {
      button.props.onPress();
    });

    const secondLabel = label.props.children;

    expect(firstLabel).toBe('First label');
    expect(secondLabel).toBe('Second label');
  });
});
