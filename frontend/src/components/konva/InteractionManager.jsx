import React, { useEffect, useRef } from "react";
import { Transformer } from "react-konva";

/**
 * InteractionManager giúp attach Transformer & xử lý Delete key
 * @param {object} props
 * @param {object} props.nodeRefs - object hoặc mảng refs các node có thể chọn
 * @param {number|string|null} props.selectedId - id hoặc index node được chọn
 * @param {function} props.onSelect - callback khi chọn node (id)
 * @param {function} props.onDelete - callback khi xóa node (id)
 */
export default function InteractionManager({ nodeRefs, selectedId, onSelect, onDelete }) {
  const trRef = useRef();

  // Khi selectedId thay đổi, attach Transformer node được chọn
  useEffect(() => {
    if (selectedId !== null && nodeRefs[selectedId] && trRef.current) {
      trRef.current.nodes([nodeRefs[selectedId]]);
      trRef.current.getLayer().batchDraw();
    } else if (trRef.current) {
      trRef.current.nodes([]);
      trRef.current.getLayer().batchDraw();
    }
  }, [selectedId, nodeRefs]);

  // Bắt phím Delete để xóa node đang chọn
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId !== null) {
        if (onDelete) onDelete(selectedId);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, onDelete]);

  // Component chỉ render Transformer, không đặt Stage hay Layer mới
  return <Transformer ref={trRef} />;
}
