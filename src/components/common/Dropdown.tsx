import ActiveArrowDownIcon from "@/assets/common/ActiveArrowDown";
import ArrowDown from "@/assets/common/ArrowDown";
import TickCircle from "@/assets/common/TickCircle";
import React, { useState } from "react";
import Select, {
  components,
  ControlProps,
  DropdownIndicatorProps,
  OptionProps,
  Props,
  StylesConfig,
} from "react-select";

interface SelectOptions {
  readonly value: string | number;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

//Select main from react-select
const Control = ({ ...props }: ControlProps<SelectOptions, false>) => {
  return (
    <components.Control
      className={
        (props.menuIsOpen ? "border !border-[#E7E6F2]" : "") +
        " xl:h-[66px] h-12"
      }
      {...props}
    >
      <>{props.children}</>
    </components.Control>
  );
};

// options that is values
const Option = ({ children, ...props }: OptionProps<SelectOptions>) => {
  return (
    <components.Option className="!bg-transparent" {...props}>
      <div
        className={`flex max-w-[100%] px-3 cursor-pointer rounded-lg h-12 ml-2 items-center justify-between
                ${
                  props.isSelected
                    ? "bg-[#F5FEFB]  text-[#147AF0] font-bold"
                    : "text-[#3D4043] hover:bg-[#F5FEFB]"
                }
                `}
      >
        <p>{props.label}</p>
        {props.isSelected && <TickCircle />}
      </div>
    </components.Option>
  );
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOptions, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      {!props.selectProps.menuIsOpen ? <ArrowDown /> : <ActiveArrowDownIcon />}
    </components.DropdownIndicator>
  );
};
type DropdownType = {
  error: any;
  value: any;
} & Props<SelectOptions>;
export const Dropdown = ({ error, ...props }: Partial<DropdownType>) => {
  const styles: StylesConfig<SelectOptions, false> = {
    control: (css) => ({
      ...css,
      fontWeight: 400,
      paddingLeft: "1rem",
      background: "#FFFFFF",
      border: "1px solid #E7E6F2",
      "&:hover": {
        background: "#FCFDFD",
        border: "1px solid #E7E6F2",
      },
      "&::placeholder": {
        fontWeight: 400,
        color: "red !important",
      },
      "&:focused": {
        background: "red",
      },
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "16px",
      color: "#869FAC",
      fontWeight: 400,
    }),
    menu: (base) => ({
      ...base,
      boxShadow: "0px -1px 8px 0px #C6CBCD4D",
      maxWidth: "95%",
      marginLeft: "5%",
    }),
    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "8px",
        height: "auto",
      },
      "::-webkit-scrollbar-track": {
        background: "white",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#F4F8F9",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#F4F8F9",
      },
    }),
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Select
      {...props}
      components={{
        Control,
        IndicatorSeparator: () => null,
        Option,
        DropdownIndicator,
      }}
      isSearchable
      onMenuOpen={() => setMenuOpen(true)}
      onMenuClose={() => setMenuOpen(false)}
      name={props.name}
      menuIsOpen={menuOpen}
      options={props.options}
      styles={styles}
    />
  );
};
