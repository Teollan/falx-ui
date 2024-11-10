import { ReactNode } from "react";
import "./App.css";
import { Background } from "./components/Background/Background";
import { Box } from "./components/Box/Box";
import { FloatingActionButton } from "./components/Button/FloatingActionButton";
import { Card } from "./components/Card/Card";
import { Center } from "./components/Center/Center";
import { Column } from "./components/Column/Column";
import { Padding } from "./components/Padding/Padding";
import { Row } from "./components/Row/Row";
import { Separate } from "./components/Separate/Separate";
import { Theme } from "./components/Theme/Theme";

const theme = {
  default: {
    floatingActionButton: {
      normal: {
        background: {
          color: "purple",
        },
      },
      hover: {
        background: {
          color: "blue",
        },
      },
      dropShadow: {
        color: "#ffffff88",
      },
    },
    card: {
      normal: {
        background: {
          color: "purple",
        },
      },
      dropShadow: {
        color: "#ffffff88",
      },
    },
  },
  extra: {
    someBg: {
      color: "#fefefe08",
    },
  },
};

function App() {
  const items = ["Apple", "Banana", "Corn"];

  return (
    <Theme theme={theme}>
      <Layout width="100vw" height="100vh">
        <Background themeSelector={(theme) => theme.extra.someBg}>
          <Padding padding="50px">
            <Column mainAxis="space-between" crossAxis="center" gap="50px">
              <Row mainAxis="space-between" crossAxis="center" gap="10px">
                {items.map((item) => (
                  <Card key={item}>{item}</Card>
                ))}
              </Row>
              <FloatingActionButton>Click me!</FloatingActionButton>
            </Column>
          </Padding>
        </Background>
      </Layout>
    </Theme>
  );
}

function Layout(props: { children: ReactNode }) {
  return (
    <Box width="100vw" height="100vh">
      <Center>
        <Separate>{props.children}</Separate>
      </Center>
    </Box>
  );
}

export default App;
