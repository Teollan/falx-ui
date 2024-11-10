import { FalxComponentProps } from "../../types/FalxComponent";
import { Background } from "../Background/Background";
import { Box } from "../Box/Box";
import { Center } from "../Center/Center";
import { DropShadow } from "../DropShadow/DropShadow";
import { Padding } from "../Padding/Padding";
import { Rounded } from "../Rounded/Rounded";
import { Separate } from "../Separate/Separate";

type CardProps = FalxComponentProps;

export function Card(props: CardProps) {
  return (
    <DropShadow
      offsetX="1px"
      offsetY="2px"
      deviation="3px"
      themeSelector={(theme) => theme.default.card.dropShadow}
    >
      <Rounded radius="20px">
        <Box width="150px" height="250px">
          <Background
            themeSelector={(theme) => theme.default.card.normal.background}
          >
            <Padding padding="20px">
              <Center>
                <Separate>{props.children}</Separate>
              </Center>
            </Padding>
          </Background>
        </Box>
      </Rounded>
    </DropShadow>
  );
}
