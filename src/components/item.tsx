import styled from "@emotion/styled";

export interface IItem {
  image: string;
  name: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 15rem;
`;

const Img = styled.img`
  height: 10rem;
`;

const Title = styled.div``;

export const Item = (props: IItem) => {
  const MAX_NAME_LENGTH = 5;

  //css elipsis is not testable
  const generateName = (name: string) => {
    if (name.length > MAX_NAME_LENGTH)
      return name.substring(0, MAX_NAME_LENGTH) + "..";

    return name;
  };
  return (
    <Wrapper>
      <Img src={props.image} />
      <Title>{generateName(props.name)}</Title>
    </Wrapper>
  );
};
