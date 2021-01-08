import React, { useEffect, useState } from 'react';

// Example from https://prettier.io/playground/
const unformattedHTML = `<!DOCTYPE html>
<HTML CLASS="no-js mY-ClAsS">
  <HEAD>
    <META CHARSET="utf-8">
    <TITLE>My tITlE</TITLE>
    <META NAME="description" content="My CoNtEnT">
  </HEAD>
  <body>
    <P>Hello world!<BR> This is HTML5 Boilerplate.</P>
    <SCRIPT>
      window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
      ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
    </SCRIPT>
    <SCRIPT src="https://www.google-analytics.com/analytics.js" ASYNC DEFER></SCRIPT>
  </body>
</HTML>`;

const loadAndFormat = async () => {
  const { prettier, plugins } = await import('./dynamicImports');
  return prettier.format(unformattedHTML, {
    parser: 'html',
    plugins
  });
};

const App = () => {
  const [formattedHTML, setFormattedHTML] = useState(null);

  useEffect(() => {
    loadAndFormat().then(setFormattedHTML);
  }, []);

  return <pre>{formattedHTML}</pre>;
}
export default App;
