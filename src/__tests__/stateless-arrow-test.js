var babel = require('babel-core');
var content = `
var React = require('react');

const arrowFunctionWithNoBody = () => window.console;

type Choices = 'option1' | 'option2';

type FooT = {
    x?: Choices
};

const Foo = (props: FooT) => {
  <div>{props.x}</div>
};

export default Foo;
`;

it('stateless-arrow', () => {
  var res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
