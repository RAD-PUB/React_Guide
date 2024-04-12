// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ButtonLarge(ButtonLargeProps) {
  return (
    <button className={`btn btn-l btn-${ButtonLargeProps.color}`} onClick={ButtonLargeProps.onclick} disabled={ButtonLargeProps.disabled}>
      {ButtonLargeProps.children}
    </button>
  );
}

export default ButtonLarge;
