function Flower({ fasthandle }) {
  return (
    <div>
      this is flower
      <span onClick={() => fasthandle('id')}>Work experience</span>
    </div>
  );
}

export default Flower;
