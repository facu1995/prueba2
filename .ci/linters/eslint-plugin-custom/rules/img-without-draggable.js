module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "require all <img> elements to have draggable={false}",
        category: "Best Practices",
        recommended: false,
      },
      schema: [],
      fixable: "code"
    },
    create: function(context) {
      return {
        JSXOpeningElement(node) {
          if (node.name.name === "img") {
            const hasDraggableProp = node.attributes.some(attribute => {
              return (
                attribute.type === "JSXAttribute" &&
                attribute.name.name === "draggable" &&
                attribute.value &&
                ((attribute.value.type === "Literal" && attribute.value.value === false) ||
                 (attribute.value.type === "JSXExpressionContainer" && attribute.value.expression.type === "Literal" && attribute.value.expression.value === false))
              );
            });
  
            if (!hasDraggableProp) {
              context.report({
                node,
                message: "Img element is missing draggable={false} property.",
                fix: function(fixer) {
                  const insertionPoint = node.selfClosing ? node.range[1] - 2 : node.range[1] - 1;                  
                  return fixer.insertTextBeforeRange([insertionPoint, insertionPoint], " draggable={false}");
              }
          });
            }
          }
        },
      };
    },
  };