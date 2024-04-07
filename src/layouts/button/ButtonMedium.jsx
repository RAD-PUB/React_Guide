function ButtonMedium(ButtonMediumProps) {
  return (
    <button className={`btn btn-m ${ButtonMediumProps.color}`}>
      {ButtonMediumProps.children}
    </button>
  );
}

export default ButtonMedium;
