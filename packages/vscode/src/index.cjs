const vscode = require('vscode');

exports.activate = function activate() {
  console.log('[vscode-css-modules] Activated');

  // By default, `vscode.typescript-language-features` is not activated when a user opens *.css in VS Code.
  // So, activate it manually.
  const tsExtension = vscode.extensions.getExtension('vscode.typescript-language-features');
  if (tsExtension) {
    console.log('[vscode-css-modules] Activating `vscode.typescript-language-features`');
    tsExtension.activate();
  }
};

exports.deactivate = function deactivate() {};
