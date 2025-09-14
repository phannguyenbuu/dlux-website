import React, { useEffect, useState } from 'react';

const DjangoListen = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Start fetching HTML from /ecomove/');
    
    

    fetch('http://192.168.1.3:8000/ecomove/', {
      headers: { 'Accept': 'text/html' },
    })
      .then(res => {
        console.log('Received response:', res);

        if (!res.ok) {
          console.error('Response NOT OK, status:', res.status);
          throw new Error('Network response was not ok');
        }

        console.log('Response OK, calling res.text()');
        return res.text();
      })
      .then(html => {
        console.log('Full HTML received:', html.substring(0, 200) + '... (truncated)');
        setHtmlContent(html);
        setLoading(false);

        document.title = window.TITLE;
        
  
      })
      .catch(err => {
        console.error('Fetch error caught:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    console.log('Currently loading...');
    return <div>Đang tải nội dung HTML từ server...</div>;
  }

  if (error) {
    console.log('Error state:', error);
    return <div>Lỗi khi tải nội dung: {error}</div>;
  }

  console.log('Render HTML content');

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default DjangoListen;
