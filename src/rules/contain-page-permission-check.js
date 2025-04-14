module.exports = {
  create(context) {
    return {
      Program: function (node) {
        var filename = context.getFilename();
        if (filename.includes("page.tsx")) {
          var sourceCode = context.sourceCode;
          var source = sourceCode.getText();
          if (!source.includes("pagePermissionCheck")) {
            context.report({
              node,
              message:
                "missing function call: pagePermissionCheck(...) or disable this rule by adding /* eslint-disable custom-rules/page-permission-check */ on top of the file",
            });
          }
        }
      },
    };
  },
};
