import { Environment, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { MobileController } from "./MobileController";
import { isStreamScreen } from "playroomkit";
import { Gameboard } from "./Gameboard";


export const Experience = () => {
  return (
    <>
      {isStreamScreen() && <OrbitControls maxPolarAngle={degToRad(80)} />}
      {isStreamScreen() ? <Gameboard /> : <MobileController />}
      <Environment preset="dawn" background blur={2} />
    </>
  );
};
