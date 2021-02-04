import React from "react";
import MenuTopButtons from "./MenuTopButtons/MenuTopButtons";
import { MenuTopContainer } from "./styled";
import { menuTopData } from './index'

const MenuTop = () => {

  console.log(menuTopData.buttons)

  return (
    <MenuTopContainer>
      {menuTopData.buttons.map((element, index) => {
        return <MenuTopButtons type={element.type} name={element.name}/>
      })}
      
    </MenuTopContainer>
  );
};

export default MenuTop;
