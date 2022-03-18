import { render } from '@testing-library/react';
import { AppHomePage } from '.';

test('renders learn react link', () => {
  const { baseElement } = render(<AppHomePage />);
  expect(baseElement).toBeDefined();
});
