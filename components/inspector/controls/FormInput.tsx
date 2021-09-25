import styled from "styled-components";

type FormInputProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showLabel?: boolean;
  placeholder?: string;
};

const SmallInput = styled.input`
  max-width: 100px;
  padding: 4px 12px;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #cfd7df;
`;

const FormInputWrapper = styled.div`
  margin: 0.25em 0;
`;

const Label = styled.label`
  font-size: 0.75em;
`;

export const FormInput = ({
  label,
  value,
  onChange,
  showLabel,
  placeholder,
}: FormInputProps) => {
  return (
    <FormInputWrapper>
      {showLabel && <Label>{label}</Label>}
      <SmallInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormInputWrapper>
  );
};
