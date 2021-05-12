import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";

function App() {
  return (
    <div className='App'>
      <Button>Default Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Small Primary Button
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary Button
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger Button
      </Button>
      <Button btnType={ButtonType.Link} href='https://www.google.com'>
        Link Button
      </Button>
      <Button btnType={ButtonType.Link} href='https://www.google.com' disabled>
        Disabled Link Button
      </Button>
    </div>
  );
}

export default App;
