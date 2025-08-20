import React from "react";

interface FieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  multiline?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, name, value, onChange, required, type = "text", min, max, multiline }) => (
  <div style={{ marginBottom: 16 }}>
    <label>
      {label}
      {multiline ? (
        <textarea name={name} value={value as string} onChange={onChange} required={required} style={{ width: "100%", minHeight: 60 }} />
      ) : (
        <input name={name} value={value} onChange={onChange} required={required} type={type} min={min} max={max} style={{ width: "100%" }} />
      )}
    </label>
  </div>
);

export default Field;
