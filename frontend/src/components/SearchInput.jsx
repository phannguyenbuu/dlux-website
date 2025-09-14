import React, { useState } from 'react';

export default function SearchInput({ onSearchChange, title, placeholder = "Search phone or content" }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // chỉ cập nhật state local thôi
  };

  const handleBlur = () => {
    if (onSearchChange) {
      onSearchChange(searchTerm); // chỉ gửi giá trị ra ngoài khi blur
    }
  };

  return (
    <input
      type="text"
      title={title}
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}  // lưu giá trị mỗi khi change
      onBlur={handleBlur}      // gửi ra ngoài khi blur
      style={{
        marginBottom: 12,
        padding: '6px 30px 6px 6px',
        maxWidth: 400,
        fontSize: 16,
        borderRadius: 5,
        border: "1px solid #ccc",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="gray" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 0 0 1.48-5.34C14.75 6.59 12.16 4 8.88 4S3 6.59 3 9.89s2.59 5.89 5.89 5.89a6.471 6.471 0 0 0 5.34-1.48l.27.28v.79l4.99 4.99 1.49-1.49-4.99-4.99zM8.88 14c-2.22 0-4.02-1.8-4.02-4.02S6.66 5.96 8.88 5.96s4.02 1.8 4.02 4.02-1.8 4.02-4.02 4.02z"/></svg>')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 20px center',
        backgroundSize: '16px 16px',
      }}
    />
  );
}
