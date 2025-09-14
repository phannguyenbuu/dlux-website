import React, { useState, useRef, useEffect, forwardRef } from "react";
// import SVGImport from "../../components/konva/SVGImport";  // component load SVG, parse paths
import ZoomPanStage from "./konva/ZoomPanStage";  // component load SVG, parse paths
import { Path, Text,Layer,Rect, Group, Transformer,Circle } from "react-konva";
import Experience from "../Experience-3D/Experience";
// import SpinnerClock from "../../../components/SpinnerClock.jsx";
import {RobotNav, RobotVNav } from "./RobotNavTabs.jsx";

function Grid({ width, height, gridSize = 20 }) {
  const lines = [];

  // Tạo các hình chữ nhật nhỏ làm ô lưới
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      lines.push(
        <Rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={gridSize}
          height={gridSize}
          stroke="#ccc"
          strokeWidth={0.5}
          listening={false} // tránh bắt sự kiện chuột
        />
      );
    }
  }

  return <Layer>{lines}</Layer>;
}

const RobotWrapper2D3D = forwardRef(({ paths, circles, ...props }, ref) => {
//     const colors = [
//   "#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5",
//   "#FF33A8", "#A833FF", "#33FFA8", "#FFA833", "#FF8333"
// ];
    

  const [tabSceneIndex, setSceneTabIndex] = useState(0);
  const handleSceneTabChange = (event, newValue) => {
      setSceneTabIndex(newValue);
      };

    const [depth, setDepth] = useState(8);
    const [spaceX, setSpaceX] = useState(4);
    const [spaceY, setSpaceY] = useState(10);
    const [showLed, setShowLed] = useState(false);
    const [angle, setangle] = useState(0);
    const [material, setMaterial] = useState("red");
    
    //   const [paths, setPaths] = useState([]);         // Mảng paths lấy từ SVGImport
    const [selected, setSelected] = React.useState(false);
    const pathRefs = useRef([]);                     // nếu cần để tương tác với paths còn giữ
    const groupRef = useRef();
    const trRef = useRef();


    const [selectedId, setSelectedId] = useState(null);
  const nodeRefs = useRef([]);

  // Khi selectedId thay đổi, gán node được chọn cho Transformer
  useEffect(() => {
    if (selectedId !== null && trRef.current && nodeRefs.current[selectedId]) {
      trRef.current.nodes([nodeRefs.current[selectedId]]);
      trRef.current.getLayer().batchDraw();
    } else if (trRef.current) {
      trRef.current.nodes([]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);



    React.useEffect(() => {
        if (selected && trRef.current && groupRef.current) {
            trRef.current.nodes([groupRef.current]);
            trRef.current.getLayer().batchDraw();
        } else if (trRef.current) {
            trRef.current.nodes([]);
            trRef.current.getLayer().batchDraw();
        }
    }, [selected]);
        
    const [isRoomSwitched, setIsRoomSwitched] = useState(false);
  
  
  return (
    // <div style={{ display: "flex", flexDirection: "row", gap: 10, position:'relative', top:60 }}>
    <RobotNav width={1150} tabLabels={["Blocks","Python","3D"]} 
        tabIndex={tabSceneIndex} handleTabChange={handleSceneTabChange}>
        <ZoomPanStage top={0} width={1150} height={740} ref={ref}>
            <Group
                x={50}
                y={50}
                ref={groupRef}
                // draggable
                onClick={() => setSelected(true)}
                onTap={() => setSelected(true)}
                >
                    {
                        paths.map((path, i) => {
                            // Clone element path và bổ sung prop draggable
                            return React.cloneElement(path, {
                                draggable: true,
                                
                                // Nếu path chưa có ref, bạn có thể thêm ref nếu cần dùng Transformer
                                ref: el => (nodeRefs.current[i] = el), // nếu bạn dùng kiểu này
                                onClick: () => setSelectedId(i),
                                onTap: () => setSelectedId(i),
                            });
                        })
                    }

                    {/* {circles.map((circle, i) => (
                        <Circle
                        key={i}
                        x={circle.x}
                        y={circle.y}
                        radius={circle.radius}
                        fill={circle.fill}
                        />
                    ))} */}
            </Group>

            <Transformer ref={trRef} />
        </ZoomPanStage>

        <div style={{fontFamily:"Inter",width:1150}}>
          <p>Nội dung python</p>
        </div>

        <Experience
            models={props.models}             // các models bạn cần truyền vào
            cameraPositions={props.cameraPositions}
            isRoomSwitched={isRoomSwitched}
            width={1150}
            height={730}
            left={0}
            top={window.innerHeight / 2 - 100}
            position="relative"
            // paths={paths}    
            depth={depth}
            showLed={showLed}
            angle={angle}
            material={material}
            spaceX={spaceX}
            spaceY = {spaceY}
            controlLeft = {1950}
            controlTop = {400}
            {...props}
        />

    </RobotNav>
    // </div>
  );
})

export default RobotWrapper2D3D;