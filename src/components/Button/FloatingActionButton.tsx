/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { Hoverable } from "../Hoverable/Hoverable";
import { Background } from "../Background/Background";
import { Rounded } from "../Rounded/Rounded";
import { Box } from "../Box/Box";
import { Padding } from "../Padding/Padding";
import { DropShadow } from "../DropShadow/DropShadow";
import { Separate } from "../Separate/Separate";

type FloatingActionButtonProps = {
  children: ReactNode;
};

export function FloatingActionButton(props: FloatingActionButtonProps) {
  return (
    <Hoverable
      whileHovered={() => (
        <Base>
          <Background
            themeSelector={(theme) =>
              theme.default.floatingActionButton.hover.background
            }
          >
            <Separate>{props.children}</Separate>
          </Background>
        </Base>
      )}
    >
      <Base>
        <Background
          themeSelector={(theme) =>
            theme.default.floatingActionButton.normal.background
          }
        >
          <Separate>{props.children}</Separate>
        </Background>
      </Base>
    </Hoverable>
  );
}

function Base(props: { children: ReactNode }) {
  return (
    <DropShadow
      offsetX="5px"
      offsetY="5px"
      deviation="3px"
      themeSelector={(theme) => theme.default.floatingActionButton.dropShadow}
    >
      <Rounded radius="20px">
        <Box width="auto" height="auto">
          <Padding padding="20px">{props.children}</Padding>
        </Box>
      </Rounded>
    </DropShadow>
  );
}
