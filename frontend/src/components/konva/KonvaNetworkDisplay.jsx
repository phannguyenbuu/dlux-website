import React, { useMemo } from "react";
import { Stage, Layer, Circle, Line, Text } from "react-konva";

const WIDTH = 900;
const HEIGHT = 600;
const MARGIN = 50;

// Hàm chuẩn hóa scale point về tọa độ canvas
function setupScale(points) {
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const scaleX = (WIDTH - 2 * MARGIN) / (maxX - minX);
  const scaleY = (HEIGHT - 2 * MARGIN) / (maxY - minY);

  return function (p) {
    return [
      (p[0] - minX) * scaleX + MARGIN,
      HEIGHT - ((p[1] - minY) * scaleY + MARGIN),
    ];
  };
}

function KonvaNetworkDisplay({ startPt, endPt, nodes = [], paths = [], shortestPath = [], entryPoints = [] }) {
  // Chuẩn hóa points
  const points = useMemo(() => nodes.map(n => n.split(",").map(Number)), [nodes]);
  const scaleToCanvas = useMemo(() => setupScale(points), [points]);

  // Hàm chuyển chỉ số i thành label A, B, ..., Z, AA, AB...
  const getLabel = (i) => {
    let label = "";
    let num = i;
    do {
      label = String.fromCharCode(65 + (num % 26)) + label;
      num = Math.floor(num / 26) - 1;
    } while (num >= 0);
    return label;
  };

  const renderPaths = () => {
    return paths.map((path, i) => {
      const pts = path.flatMap(p => scaleToCanvas(p));
      return (
        <Line
          key={`path-${i}`}
          points={pts}
          stroke="#ccc"
          strokeWidth={2}
          tension={0.3}
          lineCap="round"
          lineJoin="round"
        />
      );
    });
  };

  const renderNodes = () => {
    const pt_1 = scaleToCanvas(startPt);
    const pt_2 = scaleToCanvas(endPt);

    return (
    <>
    <Circle
            x={pt_1[0]}
            y={pt_1[1]}
            radius={6}
            fill="green"
            stroke="black"
            strokeWidth={1}
            draggable
          />
    <Circle
            x={pt_2[0]}
            y={pt_2[1]}
            radius={6}
            fill="green"
            stroke="black"
            strokeWidth={1}
            draggable
          />
    {nodes.map((n, i) => {
    
      const [x, y] = n.split(",").map(Number);
      const [cx, cy] = scaleToCanvas([x, y]);
      const label = getLabel(i);

      return (
        <React.Fragment key={`node-${n}`}>
          <Circle
            x={cx}
            y={cy}
            radius={6}
            fill="blue"
            stroke="black"
            strokeWidth={1}
          />
          <Text
            x={cx + 8}
            y={cy - 6}
            text={label}
            fontSize={14}
            fontFamily="Calibri"
            fill="black"
            listening={false}
          />
        </React.Fragment>
      );
    })}

    </>);
  };

  const renderEntryPoints = () => {
    return entryPoints.map((nodeKey, i) => {
      const [x, y] = nodeKey.split(",").map(Number);
      const [cx, cy] = scaleToCanvas([x, y]);
      return (
        <Circle
          key={`entry-${nodeKey}-${i}`}
          x={cx}
          y={cy}
          radius={10}
          fill="red"
          opacity={0.6}
          shadowColor="red"
          shadowBlur={10}
          shadowOpacity={0.8}
        />
      );
    });
  };

  const renderShortestPathLine = () => {
    if (!shortestPath || shortestPath.length < 2) return null;
    

    const pts = shortestPath.flatMap(n => {
    //console.log('p',n);
      const [x, y] = n.split(",").map(Number);
      return scaleToCanvas([x, y]);
    });
    // console.log('shortestPath',pts);
    const key = `shortestPath-${Date.now()}`;

    return (
      <Line
        key={key}
        points={pts}
        stroke="red"
        strokeWidth={4}
        lineCap="round"
        lineJoin="round"
        dash={[10, 5]}
      />
    );
  };

  return (
    <Stage width={WIDTH} height={HEIGHT} style={{ border: "1px solid #ccc" }}>
      <Layer>
        {renderPaths()}
        {renderShortestPathLine()}
        {renderNodes()}
        {renderEntryPoints()}
      </Layer>
    </Stage>
  );
}

export default KonvaNetworkDisplay;
