// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ButtonMedium(ButtonMediumProps) {
  return (
    <button className={`btn btn-m btn-${ButtonMediumProps.color}`}>
      {ButtonMediumProps.children}
    </button>
  );
}

export default ButtonMedium;
