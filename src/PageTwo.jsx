
import React from 'react';
import { Helmet } from 'react-helmet';

function PageTwo() {
  const throwError = () => {
    throw new Error('This is a deliberate JavaScript error!');
  };

  return (
    <div>
      <Helmet>
        <title>About</title>
        <script type="text/javascript">
          {`
            // Initialize the queue
            window.CPRUMDataLayer = window.CPRUMDataLayer || [];
            function cpRumTag() {
              window.CPRUMDataLayer.push(arguments);
            }
    
    

    
  //fix ww
            // Queue some events before the "real library" is loaded
            
            cpRumTag('usePageHide', false);
            cpRumTag('variation', 'SPA');
            cpRumTag('pageGroup', 'yuiiw');
            cpRumTag('conversion', 20, 1200);
            cpRumTag('appError', 10, 'undefined error');
            cpRumTag('benchmarkLog', true);
            cpRumTag('consentv2', { analytics_storage: 'denied' })
          `}
        </script>
      </Helmet>
      <h1>Welcome to Page Two</h1>
      <p>This page contains a button that throws an error.</p>
      <button onClick={throwError}>Click to Throw Error</button>
    </div>
  );
}

export default PageTwo;
