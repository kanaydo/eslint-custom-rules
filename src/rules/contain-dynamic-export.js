module.exports = {
  create(context) {
    return {
      Program: function(node) {
        var filename = context.getFilename();
        if (filename.includes("page.tsx")) {
          var sourceCode = context.sourceCode;
          var source = sourceCode.getText();
          if (!source.includes('export const dynamic = "force-dynamic";')) {
            context.report({
              node,
              message:
                'missing: export const dynamic = "force-dynamic";',
            });
          }
        }
      },
    };
  },
};
