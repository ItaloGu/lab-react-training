import { useState } from 'react';

function LikeButton() {
  const colors = [
    { backgroundColor: 'aqua', color: 'brown', margin: '0.5rem' },
    { backgroundColor: 'brown', color: 'aqua', margin: '0.5rem' },
    { backgroundColor: 'green', color: 'yellow', margin: '0.5rem' },
    { backgroundColor: 'yellow', color: 'green', margin: '0.5rem' },
    { backgroundColor: 'blue', color: 'red', margin: '0.5rem' },
    { backgroundColor: 'red', color: 'blue', margin: '0.5rem' },
  ];

  const [likes, setLikes] = useState(0);

  function handleIncrement() {
    setLikes(likes + 1);
  }

  return (
    <button
      style={colors[likes % 6]}
      className="color1"
      onClick={handleIncrement}
    >
      {likes} Likes
    </button>
  );
}

export default LikeButton;
