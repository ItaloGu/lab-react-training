function BoxColor(prop) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${prop.r}, ${prop.g}, ${prop.b})`,
        textAlign: 'center',
      }}
      className="border border-dark"
    >
      <p>{`rgb(${prop.r}, ${prop.g}, ${prop.b})`}</p>
      <p></p>
    </div>
  );
}

export default BoxColor;
