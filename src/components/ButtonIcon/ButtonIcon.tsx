import { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { IButtonIconProps } from '../../interfaces';

const ButtonIcon: FC<IButtonIconProps> = ({
  iconName,
  widthIcon,
  heightIcon,
}) => {
  return (
    <Button type="button">
      <Icon iconName={iconName} width={widthIcon} height={heightIcon} />
    </Button>
  );
};

export default ButtonIcon;

const Button = styled.button`
  padding: 8px;
  color: #a1a1a1;
  background-color: transparent;
`;
