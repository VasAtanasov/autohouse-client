import React from 'react';
import { SliderWrapper, SliderContainer, InputWrapper } from './slider.styles';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import wNumb from 'wnumb';

const Slider = ({ min, max, from, to, filter, register }) => {
  React.useEffect(() => {
    const slider = document.getElementById(`slider_${filter}`);
    const input0 = document.getElementById(`input-min-range_${filter}`);
    const input1 = document.getElementById(`input-max-range_${filter}`);
    const inputs = [input0, input1];

    noUiSlider.create(slider, {
      start: [from, to],
      connect: true,
      range: {
        min,
        max,
      },
      format: wNumb({
        decimals: 0,
      }),
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
      });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <SliderWrapper className={`slider-group-${filter}`}>
      <InputWrapper className={`range_${filter}`}>
        <input
          id={`input-min-range_${filter}`}
          type="text"
          name={`${filter}From`}
          className="min"
          ref={register}
        />
        <input
          id={`input-max-range_${filter}`}
          type="text"
          name={`${filter}To`}
          className="max"
          ref={register}
        />
      </InputWrapper>
      <SliderContainer className="slider-container">
        <div id={`slider_${filter}`} className="range-slider" />
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
