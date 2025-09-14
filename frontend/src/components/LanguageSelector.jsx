import React, { useState } from 'react';

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'vn', label: 'Vietnamese', flag: 'https://flagcdn.com/w40/vn.png' },
  { code: 'jp', label: 'Japanese', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'cn', label: 'Chinese', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'rs', label: 'Russian', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
];

export function CustomSelector({ data, selected, onSelected, children }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div style={{ position: 'relative', width: 220, fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={toggleOpen}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: 16,
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: 6,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={selected.flag}
            alt={selected.label}
            style={{ width: 28, height: 28, borderRadius: '50%', marginRight: 10, objectFit: 'cover' }}
          />
          {selected.label}
        </div>
        <span style={{ marginLeft: 10, fontSize: 14 }}>▼</span>
      </button>

      {open && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            margin: 0,
            padding: 0,
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: 6,
            backgroundColor: '#fff',
            maxHeight: 220,
            overflowY: 'auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 10,
          }}
        >
          {data.map((item) => (
            <li
              key={item.code}
              item={item}
              style={{
                padding: '10px 15px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: selected.code === item.code ? '#e4e4e4' : '#fff',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selected.code === item.code ? '#e4e4e4' : '#fff')
              }
            >
              <img
                src={item.flag}
                alt={item.label}
                style={{ width: 28, height: 28, borderRadius: '50%', marginRight: 12, objectFit: 'cover' }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LanguageSelector() {
  const [selected, setSelected] = useState(LANGUAGES[0]);

  const selectLanguage = (item) => {
    setSelected(item);
  };

  return (
    <CustomSelector data={LANGUAGES} selected={selected} onSelected={selectLanguage}/>
      
  );
}
