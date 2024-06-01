import { Dimensions, Platform, Text, View } from "react-native";

import { Canvas } from "@react-three/fiber/native";
import { Suspense } from "react";
import Model from "@/components/Model";
import useControls from "r3f-native-orbitcontrols";

export default function HomeScreen() {
  const WIDTH = Dimensions.get("screen").width - 20;
  const [OrbitControls, events] = useControls();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      {...events}
    >
      <Canvas style={{ borderWidth: 2, width: WIDTH }}>
        <OrbitControls enablePan={false} />
        <directionalLight position={[1, 0, 0]} args={["white", 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Text>Test</Text>
    </View>
  );
}
