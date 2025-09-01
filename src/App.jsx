import React, { useState } from "react";
import "./App.css";

function App() {
  // Navbar
  const [menuOpen, setMenuOpen] = useState(false);

  // Nested Checkbox
  const [data, setData] = useState([
    {
      name: "Fruits",
      checked: false,
      indeterminate: false,
      children: [
        { name: "Apple", checked: false },
        { name: "Banana", checked: false },
      ],
    },
    {
      name: "Vegetables",
      checked: false,
      indeterminate: false,
      children: [
        { name: "Carrot", checked: false },
        { name: "Spinach", checked: false },
      ],
    },
  ]);

  // Select All
  const handleSelectAll = (checked) => {
    const newData = data.map((parent) => ({
      ...parent,
      checked: checked,
      indeterminate: false,
      children: parent.children.map((child) => ({ ...child, checked: checked })),
    }));
    setData(newData);
  };

  // Parent
  const handleParentCheck = (index, checked) => {
    const newData = [...data];
    newData[index].checked = checked;
    newData[index].indeterminate = false;
    newData[index].children = newData[index].children.map((child) => ({
      ...child,
      checked: checked,
    }));
    setData(newData);
  };

  // Child
  const handleChildCheck = (parentIndex, childIndex, checked) => {
    const newData = [...data];
    newData[parentIndex].children[childIndex].checked = checked;

    const allChecked = newData[parentIndex].children.every((c) => c.checked);
    const someChecked = newData[parentIndex].children.some((c) => c.checked);

    newData[parentIndex].checked = allChecked;
    newData[parentIndex].indeterminate = !allChecked && someChecked;

    setData(newData);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DataVinci</div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </nav>

      {/* Content Section */}
      <div className="container">
        <div className="section">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>

        <div className="section">
          <button className="btn">Click Me</button>
          <input className="input" placeholder="Type something..." />
        </div>

        {/* Nested Checkbox */}
        <div className="section checkbox-section">
          <label>
            <input
              type="checkbox"
              checked={data.every((parent) => parent.checked)}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />{" "}
            Select All
          </label>

          {data.map((parent, pIndex) => (
            <div key={pIndex} className="parent-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={parent.checked}
                  ref={(el) => {
                    if (el) el.indeterminate = parent.indeterminate;
                  }}
                  onChange={(e) => handleParentCheck(pIndex, e.target.checked)}
                />{" "}
                {parent.name}
              </label>

              <div className="child-checkboxes">
                {parent.children.map((child, cIndex) => (
                  <label key={cIndex}>
                    <input
                      type="checkbox"
                      checked={child.checked}
                      onChange={(e) =>
                        handleChildCheck(pIndex, cIndex, e.target.checked)
                      }
                    />{" "}
                    {child.name}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
