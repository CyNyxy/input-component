import React from "react";
import PropTypes from 'prop-types';
import "./input.css"

function Input({ 
  label, 
  error, 
  disabled, 
  helperText, 
  startIcon, 
  endIcon, 
  size, 
  fullWidth, 
  multiline, 
  row, 
  ...props }) {
  const [inputClassName] = getClassNames({
    error,
    disabled,
    helperText,
    size, 
    fullWidth,
    multiline
  })

  return (
    <>
      <label>Label</label><br />
      <div className={inputClassName} {...props}>
        {multiline ? 
          <textarea placeholder="Placeholder" rows={row} disabled={disabled}></textarea> :
          <>
            {startIcon && <span className="material-icons">{startIcon}</span>}
            <input type="text" placeholder="Placeholder" disabled={disabled} />
            {endIcon && <span className="material-icons">{endIcon}</span>}
          </>
        }
      </div>
      {helperText && <small>{helperText}</small>}
      </>
  );
}

function getClassNames({ error, disabled, size, helperText, fullWidth, multiline }) {
  const inputClassNames = ["input", "fontawesome", "wrapper"];

  if (!multiline) inputClassNames.push(`input--size-${size}`);

  if (error) inputClassNames.push("input--error");

  if (disabled) inputClassNames.push("input--disabled");

  if (helperText) inputClassNames.push("input--helptext");

  if (fullWidth) inputClassNames.push("input--fullwidth");

  const inputClassName = inputClassNames.join(" ");

  return [inputClassName];
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]).isRequired,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  row: PropTypes.number,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
}

Input.defaultProps = {
  label: "Label",
  error: false,
  size: "md",
  disabled: false,
  helperText: "",
  fullWidth: false,
  row: 4,
}

export default Input;