// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ButtonLarge(ButtonLargeProps) {
  return (
    <button className={`btn btn-l btn-${ButtonLargeProps.color}`}>
      {ButtonLargeProps.children}
    </button>
  );
}

export default ButtonLarge;
