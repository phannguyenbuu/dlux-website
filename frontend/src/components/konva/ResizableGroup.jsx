import React, { useRef, useEffect, useState } from "react";
import { Group, Rect, Transformer } from "react-konva";

// Component chứa 4 node nhỏ + transformer để resize, scale mượt
export default function ResizableGroup({ shapeProps, isSelected, onSelect, onChange }) {
  const groupRef = useRef();
  const trRef = useRef();

  // 4 node nhỏ trong group, tái tạo vị trí dựa theo width, height của group
  // Các vị trí gốc tương đối (percent hoặc px) ở đỉnh nhóm
  const { x, y, width, height } = shapeProps;

  // 4 node con dạng Rect nhỏ ở 4 góc của group
  const smallNodes = [
    { key: "top-left", x: 0, y: 0, fill: "red" },
    { key: "top-right", x: width, y: 0, fill: "green" },
    { key: "bottom-left", x: 0, y: height, fill: "blue" },
    { key: "bottom-right", x: width, y: height, fill: "yellow" },
  ];

  useEffect(() => {
    if (isSelected && trRef.current && groupRef.current) {
        trRef.current.nodes([groupRef.current]);
        trRef.current.getLayer().batchDraw();
    }
    }, [isSelected]);


  return (
    <>
      <Group
        ref={groupRef}
        x={x}
        y={y}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // Khi transform kích thước, tính lại width và height theo scale
          const node = groupRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // Reset scale sau khi transform để không bị nhân đôi scale
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY),
          });
        }}
        width={width}
        height={height}
      >
        {/* Render 4 node nhỏ ở 4 góc */}
        {smallNodes.map(({ key, x, y, fill }) => (
          <Rect
            key={key}
            x={x}
            y={y}
            width={10}
            height={10}
            fill={fill}
            offsetX={5}
            offsetY={5}
            cornerRadius={3}
            shadowBlur={2}
            stroke="black"
            strokeWidth={1}
          />
        ))}
      </Group>

      {/* Transformer để resize */}
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false} // tắt xoay nếu bạn chỉ cần scale
          enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]} // set điểm resize 4 đỉnh
          boundBoxFunc={(oldBox, newBox) => {
            // Giới hạn kích thước tối thiểu nếu bạn muốn
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}
