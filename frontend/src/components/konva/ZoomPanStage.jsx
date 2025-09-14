import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle  } from "react";
import { Stage, Layer, Transformer } from "react-konva";

import { GB } from "./GB";

const ZoomPanStage = forwardRef(({ width, height, children, ...props }, ref)  => {
  const stageRef = useRef(null);
  const transformerRef = useRef(null);


  useImperativeHandle(ref, () => ({
    getStage: () => stageRef.current,
  }));

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [selectedShapeName, setSelectedShapeName] = useState(null);

  const isPanning = useRef(false);
  const lastPanPos = useRef({ x: 0, y: 0 });

  // Zoom stage relative to pointer position (mượt, tự nhiên)
  const handleWheel = (e) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    const oldScale = scale;
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointer.x - position.x) / oldScale,
      y: (pointer.y - position.y) / oldScale,
    };

    const scaleBy = 1.05;
    const direction = e.evt.deltaY > 0 ? 1 : -1;
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    setScale(newScale);
    setPosition(newPos);

    GB.setInput1(`Position: (${newPos.x.toFixed(2)}, ${newPos.y.toFixed(2)}), Zoom: ${newScale.toFixed(2)}`);

  };
  
  const handleMouseDown = (e) => {
    if (e.evt.button === 1) {
      isPanning.current = true;
      lastPanPos.current = { x: e.evt.clientX, y: e.evt.clientY };
      stageRef.current.draggable(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isPanning.current) {
      e.evt.preventDefault();
      const newPos = {
        x: position.x + (e.evt.clientX - lastPanPos.current.x),
        y: position.y + (e.evt.clientY - lastPanPos.current.y),
      };
      setPosition(newPos);
      lastPanPos.current = { x: e.evt.clientX, y: e.evt.clientY };

      // Cập nhật realtime thông tin pan vào GB.input1
      GB.setInput1(
        `Position: (${newPos.x.toFixed(2)}, ${newPos.y.toFixed(2)}), Zoom: ${scale.toFixed(2)}`
      );
    }
  };

  const handleMouseUp = (e) => {
    if (e.evt.button === 1) {
      isPanning.current = false;
      stageRef.current.draggable(false);
    }
  };

  // Cập nhật node được chọn cho Transformer khi selectedShapeName thay đổi
  useEffect(() => {
    if (selectedShapeName && transformerRef.current) {
      const stage = stageRef.current;
      const selectedNode = stage.findOne("." + selectedShapeName);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer().batchDraw();
      }
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedShapeName]);

  // Clone children để truyền thêm props chọn, dragable, className name...
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, {
      onClick: () => setSelectedShapeName(child.props.name),
      onTap: () => setSelectedShapeName(child.props.name),
      draggable: true,
      // Bỏ snap hard để drag mượt hơn, nếu cần có thể đưa dragBoundFunc nhẹ nhàng
      // dragBoundFunc: pos => ({
      //   x: Math.round(pos.x / 5) * 5,
      //   y: Math.round(pos.y / 5) * 5
      // }),
    });
  });
  

  return (
    <Stage
      
      width={width}
      height={height}
      scaleX={scale}
      scaleY={scale}
      x={position.x}
      y={position.y}
      ref={stageRef}

      style={{position:"relative",marginTop:props.top, width, height:'fit-content', 
        backgroundColor:'#fff', borderRadius:10, border:'1px solid #000'}}
      
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      draggable={false} 
    >
      <Layer>
        {childrenWithProps}
        <Transformer ref={transformerRef} />
      </Layer>
    </Stage>
  );
});

export default ZoomPanStage;