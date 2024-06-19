import { ChangeEventHandler } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "primary";
  labelname: string;
  name: string;
  leftIcon: React.ComponentType;
  rightIcon: React.ComponentType;
  activeLeftIcon: React.ComponentType;
  activeRightIcon: React.ComponentType;
  error: boolean | string; // boolean
  errorIcon: React.ComponentType;
  containerClassName: string;
  setValue?: any;
  value: string;
  dataTest: string;
  id: string;
  // onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: "primary";
  labelname: string;
  name: string;
  height?: string;
  leftIcon: React.ComponentType;
  rightIcon: React.ComponentType;
  activeLeftIcon: React.ComponentType;
  activeRightIcon: React.ComponentType;
  error: boolean | string;
  maximumLength?: number;
  errorIcon: React.ComponentType;
  containerClassName: string;
  setValue?: any;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  dataTest: string;
  maxWords?: string;
  id: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelname: string;
  name: string;
  error: boolean | string; // boolean
  errorIcon: React.ComponentType;
  containerClassName: string;
  setValue?: any;
  isMulti?: boolean;
  placeholder?: string;
  children: React.ReactNode;
  dataTest: string;
  id: string;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
}
