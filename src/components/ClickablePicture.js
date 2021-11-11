import { useState } from 'react';
import withGlasses from './img/persons/maxence-glasses.png';
import withoutGlasses from './img/persons/maxence.png';

function ClickablePicture() {
  const picture = [withoutGlasses, withGlasses];
  const [image, setImage] = useState(0);

  function changeImage() {
    setImage(image + 1);
  }

  return (
    <img
      style={{ height: '10rem', width: 'auto', margin: '1rem' }}
      src={picture[image % 2]}
      alt="face"
      onClick={changeImage}
    />
  );
}

export default ClickablePicture;
