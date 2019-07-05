import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

/**
 * Required: `value`
 */
export const Input = ({
  autoComplete,
  disabled,
  error,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  type,
  value,
}) => (
  <div>
    {label && <InputLabel>{label}</InputLabel>}
    <InputNative
      autoComplete={autoComplete}
      disabled={disabled}
      error={Boolean(error)}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    <ErrorLabel>{error}</ErrorLabel>
  </div>
)

Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
}

Input.defaultProps = {
  autoComplete: undefined,
  disabled: false,
  error: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  placeholder: undefined,
  type: "text",
}

const InputNative = styled.input`
  border: 1px solid;
  border-radius: 4px;
  position: relative;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  background-color: white;
  transition: box-shadow 120ms, border-color 120ms;
  box-shadow: 0 0 0 1px;
  &:focus {
    box-shadow: 0 0 0 1px;
    border-color: grey;
  }
  &:disabled {
    background-color: rgba(80, 80, 80, .1);
  }
`

const InputLabel = styled.label`
  color: currentColor;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
`

const ErrorLabel = styled.label`
  display: block;
  font-size: 0.9em;
  color: red;
  margin-top: 0.2rem;
  text-align: left;
`