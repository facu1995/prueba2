module.exports = {
    meta: {
      type: "problem", 
      docs: {
        description: "require all <input> and <button> elements to have an 'id' attribute",
        category: "Best Practices",
        recommended: false,
      },
      schema: [], 
    },
    create: function (context) {
      return {
        JSXOpeningElement(node) {
          const isInputElement = node.name.name === "input";
          const isButtonElement = node.name.name === "button";
          
          if (isInputElement || isButtonElement) {
            const hasIdAttribute = node.attributes.some(attribute => attribute.type === "JSXAttribute" && attribute.name.name === "id");
            
            if (!hasIdAttribute) {
              context.report({
                node,
                message: `<${node.name.name}> element is missing 'id' attribute.`,
              });
            }
          }
        },
      };
    },
  };