import React from 'react';
import { Helmet } from 'react-helmet';

function PageOne() {
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

            // Queue some events before the "real library" is loaded
            cpRumTag('excludeBenchMarks');
            cpRumTag('usePageHide', true);
            cpRumTag( 'tracepoint', 'tracepointt', 'BenchmarkGtay');
            cpRumTag( 'indicator', 'indii', 1225);
          `}
        </script>
      </Helmet>

      <h1>Welcome to Page One</h1>
      <p>This is some content on the first page.</p>
    </div>
  );
}

export default PageOne;
