import React from 'react';
import PropTypes from 'prop-types';

class Foo extends React.Component {
  static displayName = 'Foo';

  static propTypes = {};

  render() {
    return <div />;
  }
}

export default Foo;

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function join(strA, strB) {
  const joiner = ' AND ';
  return `${strA} ${joiner} ${strB}`;
}
