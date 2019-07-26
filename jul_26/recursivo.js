const obj = {
  name: "chicorita",
  children: [
    {
      name: "lv 2",
      children: [
        {
          name: "lv 3",
          children: [
            {
              name: "lv4",
              children: [
                {
                  name: "lv5",
                  children: [],
                }
              ]
            }
          ]
        }
      ]
    }, 
    {
      name: "x lv2",
      children: [
        {
          name: "xk l3",
          children: []
        }
      ]
    }, 
    {
      name: "y lv2",
      children: [
        {
          name: "yb lv3",
          children: []
        }
      ]
    }, 
    {
      name: "z lv2",
      children: [
        {
          name: "zv lv3",
          children: []
        }
      ]
    }
  ]
};

/**
 * Function to traverse the object using recursion
 */
function traverseObj(obj) {
  console.log(obj.name);

  if (!obj.children) {
    return;
  }

  for (let i = 0; i < obj.children.length; i++) {
    traverseObj(obj.children[i]);
  }
}

traverseObj(obj);