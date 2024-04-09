// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ButtonXLarge(ButtonXLargeProps) {
  return (
    <button className={`btn btn-xl btn-${ButtonXLargeProps.color}`}>
      {ButtonXLargeProps.children}
    </button>
  );
}

export default ButtonXLarge;
