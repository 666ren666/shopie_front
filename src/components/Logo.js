import React, { useState, useEffect } from 'react';

function Logo() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('logo.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
  );
}

export default Logo;