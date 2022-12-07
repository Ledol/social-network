import React, { FC } from "react";
import { WrappedFieldProps } from "redux-form";
import style from "./FormsControls.module.css";

const FormControl: FC<WrappedFieldProps> = ({ input, meta:{touched, error}, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: FC<WrappedFieldProps> = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
