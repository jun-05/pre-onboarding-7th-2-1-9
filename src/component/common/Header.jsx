import React from 'react';
import tw from 'tailwind-styled-components';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { useParams, useNavigate } from 'react-router-dom';

const Header = ({ title = '전체 차량' }) => {
  const param = useParams();
  const navigate = useNavigate();
  const isDetail = param.id;

  const onClickBack = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <BackButton $hasBack={isDetail !== undefined} onClick={onClickBack}>
          <IoMdArrowRoundBack />
        </BackButton>
        <TitleBlock>{title}</TitleBlock>
        <FrontButton>
          <IoMdArrowRoundForward />
        </FrontButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = tw.div`
w-full
min-w-[360px] 
sm:w-[480px]
h-[60px]


border-b-[1px]
border-black
`;
const HeaderContainer = tw.div`
flex 
h-full 
items-center 
justify-between

`;

const BackButton = tw.a`
${p => (p.$hasBack ? 'visible' : 'invisible')}
flex-none
pl-4
text-[20px]
w-fit

hover:cursor-pointer
`;

const TitleBlock = tw.div`
grow 
text-center
text-[17px]
font-bold
`;

const FrontButton = tw.a`
flex-none
invisible
pr-4
text-[20px]
w-fit
`;

export default Header;
