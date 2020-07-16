import React from 'react';
import { FIleInput } from './image-upload.styles';

// const initialState = {
//   value: '',
//   imagePreviewUrl: '',
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'RESET':
//       return Object.assign({}, initialState);
//     case 'SELECT_IMAGE':
//       return {
//         ...state,
//         imagePreviewUrl: action.payload.preview,
//         value: action.payload.value,
//       };
//     default:
//       return state;
//   }
// };

const ImageUpload = ({ register }) => {
  // const [state, dispatch] = React.useReducer(
  //   reducer,
  //   Object.assign({}, initialState)
  // );
  // const { imagePreviewUrl, value } = state;

  // const _resetImage = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: 'RESET',
  //   });
  // };

  // const _handleImageChange = (e) => {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   if (file && file.type.match('image.*')) {
  //     reader.readAsDataURL(file);
  //   }
  //   reader.onloadend = () => {
  //     dispatch({
  //       type: 'SELECT_IMAGE',
  //       payload: {
  //         preview: reader.result,
  //       },
  //     });
  //   };
  // };

  return (
    <React.Fragment>
      <FIleInput
        type="file"
        // onChange={_handleImageChange}
        accept="image/*"
        name="images"
        ref={register}
        multiple
      />
      {/* {imagePreviewUrl && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={_resetImage}>Remove File</button>
        </div>
      )}
      {imagePreviewUrl && <img src={imagePreviewUrl} alt="preview" />} */}
    </React.Fragment>
  );
};

export default ImageUpload;
