function Input(props) {
  return (
    <>
      {props.label ? (
        <label for={props.name}>
          <b>{props.label}</b>
        </label>
      ) : null}
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        required
      />
    </>
  );
}

export default Input;
