import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
// import { Menu } from "@mantine/core";
import { MdCancel, MdCheckCircle, MdError, MdInfo } from "react-icons/md";

// The types of alerts that users can choose from.
export const alertTypes = [
  {
    title: "Warning",
    value: "warning",
    icon: MdError,
    color: "#e69819",
    backgroundColor: {
      light: "#fff6e6",
      dark: "#805d20",
    },
  },
  {
    title: "Error",
    value: "error",
    icon: MdCancel,
    color: "#d80d0d",
    backgroundColor: {
      light: "#ffe6e6",
      dark: "#802020",
    },
  },
  {
    title: "Info",
    value: "info",
    icon: MdInfo,
    color: "#507aff",
    backgroundColor: {
      light: "#e6ebff",
      dark: "#203380",
    },
  },
  {
    title: "Success",
    value: "success",
    icon: MdCheckCircle,
    color: "#0bc10b",
    backgroundColor: {
      light: "#e6ffe6",
      dark: "#208020",
    },
  },
];

// The Alert block.
export const Alert = createReactBlockSpec(
  {
    type: "alert",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      type: {
        default: "warning",
        values: ["warning", "error", "info", "success"],
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      const alertType = alertTypes.find(
        (a) => a.value === props.block.props.type
      );

      const Icon = alertType.icon;
      return (
        <div className={"alert"} data-alert-type={props.block.props.type}>
          {/*Icon which opens a menu to choose the Alert type*/}
          <Menubar withinPortal={false}>
            <MenubarMenu>
              <MenubarTrigger>
                <div className={"alert-icon-wrapper"} contentEditable={false}>
                  <Icon
                    className={"alert-icon"}
                    data-alert-icon-type={props.block.props.type}
                    size={32}
                  />
                </div>
              </MenubarTrigger>
              {/*Dropdown to change the Alert type*/}
              <MenubarContent>

                
                <MenubarLabel>Alert Type</MenubarLabel>
                {/* <Menu.Divider /> */}
                <MenubarSeparator />
                {alertTypes.map((type) => {
                  const ItemIcon = type.icon;

                  return (
                    <MenubarItem
                      key={type.value}
                      leftSection={
                        <ItemIcon
                          className={"alert-icon"}
                          data-alert-icon-type={type.value}
                        />
                      }
                      onClick={() =>
                        props.editor.updateBlock(props.block, {
                          type: "alert",
                          props: { type: type.value },
                        })
                      }
                    >
                      {type.title}
                    </MenubarItem>
                  );
                })}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          {/*Rich text field for user to type in*/}
          <div className={"inline-content"} ref={props.contentRef} />
        </div>
      );
    },
  }
);
