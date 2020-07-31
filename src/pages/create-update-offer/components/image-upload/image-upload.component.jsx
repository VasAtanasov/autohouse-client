import React from 'react';
import { FIleInput } from './image-upload.styles';

const ImageUpload = ({ register }) => {
  return (
    <React.Fragment>
      <FIleInput
        type="file"
        accept="image/*"
        name="images"
        ref={register({ required: 'At least one photo is required!' })}
        multiple
      />
    </React.Fragment>
  );
};

export default ImageUpload;
