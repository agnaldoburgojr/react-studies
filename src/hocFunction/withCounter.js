/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withHouter = (WrapperComponent, increment) => {
  const WithHouter = props => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
      setCount(prevState => prevState + increment);
    };

    return (
      <WrapperComponent
        count={count}
        handleIncrement={handleIncrement}
        {...props}
      />
    );
  };

  return WithHouter;
};

export default withHouter;
