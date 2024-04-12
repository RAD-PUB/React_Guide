// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ButtonMedium(ButtonMediumProps) {
  return (
    <button className={`btn btn-m btn-${ButtonMediumProps.color}`} onClick={ButtonMediumProps.onclick}>
      {ButtonMediumProps.children}
    </button>
  );
}

export default ButtonMedium;
