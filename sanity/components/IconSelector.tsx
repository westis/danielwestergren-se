import React, { forwardRef, useState } from "react";
import type { ChangeEvent } from "react";
import { SearchIcon } from "@sanity/icons";
import * as allIcons from "@sanity/icons";

interface IconSelectorProps {
  value?: string;
  onChange: (value: string) => void;
}

export const IconSelector = forwardRef<HTMLDivElement, IconSelectorProps>(
  (props, ref) => {
    const [search, setSearch] = useState("");
    const icons = Object.entries(allIcons).filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };

    return (
      <div ref={ref}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search icons..."
            value={search}
            onChange={handleSearchChange}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
            gap: "10px",
          }}
        >
          {icons.map(([name, Icon]) => (
            <button
              key={name}
              onClick={() => props.onChange(name)}
              style={{
                border:
                  props.value === name ? "2px solid blue" : "1px solid #ccc",
                padding: "5px",
                background: "none",
                cursor: "pointer",
              }}
            >
              {React.createElement(Icon)}
            </button>
          ))}
        </div>
      </div>
    );
  }
);
