import { FC } from "react";
import styled from "styled-components";

import {
  Wrapper,
  border,
  boxShadow,
} from "../../../../../styledHelpers/Components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { fontSize } from "../../../../../styledHelpers/FontSizes";
import { cannotSelect } from "../../../../../styledHelpers/Components";

const CardWrapper = styled(Wrapper)`
  position: relative;
  text-align: center;
  background-color: white;
  height: 240px;
  width: 300px;
  ${cannotSelect()};
`;
const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 300px;
`;
const CardIconWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: ${Colors.white};

  height: 80px;
  padding-top: 20px;
  width: 100px;
  ${border(1, "solid", Colors.lightgray)};
  border-radius: 5px;
  ${boxShadow(0, 0, 10, -5)};
`;
const CardContent = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  height: 140px;
  width: 300px;
  text-align: left;
`;
const CardTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 122px;
  width: 200px;
  font-size: ${fontSize[16]};
  text-align: left;
`;
const LastUpdate = styled.div`
  position: absolute;
  bottom: 10px;
  left: 16px;
  width: 280px;
  height: 20px;
  font-size: ${fontSize[14]};
  text-align: left;
  color: ${Colors.grayLighter};
  font-weight: 400;
`;
const TypeAndNumberOfUsers = styled.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  width: 280px;
  height: 50px;
  text-align: left;
  font-weight: 400;
`;
const IconSVG = styled.svg`
  position: relative;
  margin: 0 6px 0 24px;
`;

export interface CardProps {
  cardNumber: number;
  imgSrc?: string;
  title: string;
  type: string;
  numberOfUsers: number;
  icon?: JSX.Element,
}

export const Card: FC<CardProps> = ({
  cardNumber,
  imgSrc = undefined,
  title,
  type,
  numberOfUsers,
  icon,
}) => {
  return (
    <CardWrapper>
      <CardImage src={imgSrc} />
      <CardIconWrapper>
        {imgSrc &&
          icon
        }
      </CardIconWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <TypeAndNumberOfUsers>
          {type}
           <IconSVG
            width="18"
            height="12"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M18.0001 8.39995C18.7121 8.39995 19.4081 8.18882 20.0001 7.79324C20.5921 7.39767 21.0536 6.83543 21.326 6.17761C21.5985 5.5198 21.6698 4.79596 21.5309 4.09763C21.392 3.3993 21.0491 2.75784 20.5457 2.25437C20.0422 1.7509 19.4007 1.40803 18.7024 1.26913C18.0041 1.13022 17.2802 1.20151 16.6224 1.47399C15.9646 1.74646 15.4024 2.20788 15.0068 2.7999C14.6112 3.39192 14.4001 4.08794 14.4001 4.79995C14.4001 5.75473 14.7794 6.67041 15.4545 7.34554C16.1296 8.02067 17.0453 8.39995 18.0001 8.39995ZM19.8001 9.59995H19.6576C19.1363 9.77995 18.5851 9.89995 18.0001 9.89995C17.4151 9.89995 16.8638 9.77995 16.3426 9.59995H16.2001C15.4351 9.59995 14.7301 9.8212 14.1113 10.1775C15.0263 11.1637 15.6001 12.4725 15.6001 13.92V15.36C15.6001 15.4425 15.5813 15.5212 15.5776 15.6H22.2001C22.6775 15.6 23.1353 15.4103 23.4729 15.0727C23.8104 14.7352 24.0001 14.2773 24.0001 13.8C24.0004 13.2483 23.8919 12.702 23.681 12.1923C23.47 11.6826 23.1607 11.2195 22.7706 10.8294C22.3805 10.4394 21.9174 10.13 21.4077 9.91906C20.898 9.70809 20.3517 9.59966 19.8001 9.59995Z"
              fill="#232C47"
            />
            <path
              d="M7.2 8.4C8.03068 8.4 8.84271 8.15368 9.53339 7.69217C10.2241 7.23067 10.7624 6.57472 11.0803 5.80727C11.3982 5.03982 11.4814 4.19534 11.3193 3.38062C11.1572 2.5659 10.7572 1.81753 10.1698 1.23015C9.58247 0.642773 8.8341 0.242762 8.01938 0.0807037C7.20466 -0.0813542 6.36018 0.00181979 5.59273 0.319708C4.82528 0.637596 4.16933 1.17592 3.70783 1.86661C3.24633 2.55729 3 3.36932 3 4.2C2.9997 4.75164 3.10814 5.29792 3.3191 5.80762C3.53007 6.31732 3.83943 6.78045 4.22949 7.17051C4.61956 7.56058 5.08268 7.86993 5.59238 8.0809C6.10208 8.29186 6.64836 8.4003 7.2 8.4ZM10.08 9.6H9.76875C8.96867 9.99107 8.09053 10.1962 7.2 10.2C6.2775 10.2 5.415 9.975 4.63125 9.6H4.32C3.17436 9.6003 2.07572 10.0555 1.26563 10.8656C0.455535 11.6757 0.000298228 12.7744 0 13.92L0 15C0 15.4774 0.189642 15.9352 0.527208 16.2728C0.864773 16.6104 1.32261 16.8 1.8 16.8H12.6C13.0774 16.8 13.5352 16.6104 13.8728 16.2728C14.2104 15.9352 14.4 15.4774 14.4 15V13.92C14.3997 12.7744 13.9445 11.6757 13.1344 10.8656C12.3243 10.0555 11.2256 9.6003 10.08 9.6Z"
              fill="#232C47"
            />
          </IconSVG>
          {numberOfUsers} users
        </TypeAndNumberOfUsers>
        <LastUpdate>Last update 2 days ago</LastUpdate>
      </CardContent>
    </CardWrapper>
  );
};
