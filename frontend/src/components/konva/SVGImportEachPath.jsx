import React, { useEffect, useState, useRef } from "react";
import { Path, Text, Group, Transformer } from "react-konva";
import { GB } from "./GB";

export default function SVGImport({ svgUrl }) {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);

  const pathRefs = useRef([]);
  const groupRef = useRef();
  const trRef = useRef();

  const parseSVGPaths = (svgText) => {
    const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
    const matches = [];
    let match;
    while ((match = pathRegex.exec(svgText)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  };

  useEffect(() => {
    if (!svgUrl) return;

    setLoading(true);
    fetch(svgUrl)
      .then((res) => res.text())
      .then((text) => {
        const extracted = parseSVGPaths(text);
        setPaths(extracted);
        setLoading(false);
        GB.setInput3(`Load:${extracted.length}`);
      })
      .catch((e) => {
        console.error("Failed to load SVG:", e);
        setLoading(false);
      });
  }, [svgUrl]);

  useEffect(() => {
    if (selected && trRef.current && groupRef.current) {
      trRef.current.nodes([groupRef.current]);
      trRef.current.getLayer().batchDraw();
    } else if (trRef.current) {
      trRef.current.nodes([]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selected]);

  useEffect(() => {
    if (paths.length === 0) return;

    const timeout = setTimeout(() => {
      const bboxes = pathRefs.current.map((ref) => (ref ? ref.getClientRect({ relativeTo: ref.getStage() }) : null));
      GB.setInput2(`OK:${paths.length}-${bboxes.filter(Boolean).length}`);
      console.log(bboxes.filter(Boolean));
    }, 0);

    return () => clearTimeout(timeout);
  }, [paths]);

  if (loading)
    return <Text text="Loading..." fontSize={20} fill="black" x={10} y={10} />;
  if (paths.length === 0)
    return <Text text="No paths found" fontSize={20} fill="red" x={10} y={10} />;

  return (
    <>
      <Group
        x={50}
        y={50}
        ref={groupRef}
        draggable
        onClick={() => setSelected(true)}
        onTap={() => setSelected(true)}
      >
        {paths.map((d, i) => (
          <Path
            key={i}
            data={d}
            stroke="black"
            strokeWidth={2}
            fill="transparent"
            ref={(el) => (pathRefs.current[i] = el)}
          />
        ))}
      </Group>

      <Transformer ref={trRef} />
    </>
  );
}
