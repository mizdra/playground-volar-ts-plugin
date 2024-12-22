const { createLanguageServicePlugin } = require('@volar/typescript/lib/quickstart/createLanguageServicePlugin.js');
const { createCssModuleLanguagePlugin } = require('./language-plugin.cjs');

module.exports = createLanguageServicePlugin((ts, info) => {
  if (info.project.projectKind !== ts.server.ProjectKind.Configured) {
    return { languagePlugins: [] };
  }

  return {
    languagePlugins: [createCssModuleLanguagePlugin()],
  };
});
