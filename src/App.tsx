import { useEffect, useState } from "react";
import { Item } from "./components/item";
import { CatsService } from "./service/cats-service";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
`;

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await CatsService.getAll();
      setData(res);
    })();
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {data.map((el: any, i: number) => (
        <Item key={i} image={el.url} name={el.id} />
      ))}
    </Wrapper>
  );
};

export default App;
