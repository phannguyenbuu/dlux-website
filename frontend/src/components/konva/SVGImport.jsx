import React, { useEffect, useState, useRef } from "react";
import { Path, Text, Group, Transformer } from "react-konva";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js"; 
import Wrapper2D3D from "../../../src/Experience-3D/components/Wrapper2D3D.jsx";
import { GB } from "./GB";

export default function SVGImport({
  svgUrl,
  onPathsUpdate,     // callback để truyền paths lên cha
  onSelectPath,      // callback chọn path (nếu bạn cần)
  setRefByIndex,     // callback để truyền ref path ra ngoài
  paths: propsPaths = [],  // mảng paths truyền từ cha xuống để render đồng bộ
  ...props
}) {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);

  const groupRef = useRef();
  const trRef = useRef();

  // Nếu propsPaths không rỗng thì ưu tiên dùng propsPaths thay vì state nội bộ
  const [internalPaths, setInternalPaths] = useState([]);
  const paths = propsPaths.length > 0 ? propsPaths : internalPaths;

  function getFullTransform(node) {
  let current = node;
  const transforms = [];

  while (current && current.tagName && current.tagName !== 'svg') {
    const tr = current.getAttribute('transform');
    if (tr) transforms.push(tr);
    current = current.parentNode;
  }

  // Có thể parse và gộp các transform ở đây nếu cần
  // Ở bước đơn giản, bạn có thể nối chuỗi hoặc lấy để apply sau
  return transforms.reverse().join(' ');
}


  const parseSVGPaths = (svgText) => {
    const loader = new SVGLoader();
    const data = loader.parse(svgText);

    // Mỗi path chứa d-string và có thể transform, bounding box
    const pathsData = data.paths.map((path) => {
        // Lấy chuỗi d
        const d = path.userData.node.getAttribute('d');

        // Lấy transform attribute chuỗi (nếu có)
        const transform = getFullTransform(path.userData.node);

        // Bạn có thể giữ luôn path hoặc tính bbox
        // const bbox = path.getBoundingBox();
        console.log('transform', transform);

        return d;
    });

    return pathsData;
  };

  useEffect(() => {
    if (!svgUrl) return;

    setLoading(true);
    fetch(svgUrl)
      .then(res => res.text())
      .then(text => {
        const extracted = parseSVGPaths(text);
        setLoading(false);

        if (propsPaths.length === 0) {
          setInternalPaths(extracted);
          if (onPathsUpdate) onPathsUpdate(extracted);  // gửi data lên cha
        } else {
          GB.setInput3(`Load:${propsPaths.length}`);
        }
      })
      .catch(e => {
        console.error("Failed to load SVG:", e);
        setLoading(false);
        if (onPathsUpdate) onPathsUpdate([]);
      });
  }, [svgUrl, onPathsUpdate, propsPaths.length]);

  useEffect(() => {
    if (selected && trRef.current && groupRef.current) {
      trRef.current.nodes([groupRef.current]);
      trRef.current.getLayer().batchDraw();
    } else if (trRef.current) {
      trRef.current.nodes([]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selected]);

  if (loading)
    return <Text text="Loading..." fontSize={20} fill="black" x={10} y={10} />;

  if (paths.length === 0)
    return <Text text="No paths found" fontSize={20} fill="red" x={10} y={10} />;
  
  return (
    <>
      <Wrapper2D3D paths={paths} {...props}/>
    </>
  );
}
