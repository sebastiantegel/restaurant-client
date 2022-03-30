import { useState } from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 30%;
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  width: 100%;
`;

export const Register = (props) => {
  const [res, setRes] = useState({
    name: "",
    address: { street: "", zip: "", city: "" },
  });

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setRes({ ...res, [name]: value });
  };

  const handleAdress = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setRes({
      ...res,
      address: { ...res.address, [name]: value },
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.save(res);
  };

  return (
    <StyledForm onSubmit={handleSave}>
      <StyledInput
        type="text"
        onChange={handleChange}
        name="name"
        value={res?.name}
        placeholder="Restaurant"
      />
      <StyledInput
        type="text"
        onChange={handleAdress}
        name="street"
        value={res?.adress?.street}
        placeholder="Adress"
      />
      <StyledInput
        type="text"
        onChange={handleAdress}
        name="zip"
        value={res?.adress?.zip}
        placeholder="Postnummer"
      />
      <StyledInput
        type="text"
        onChange={handleAdress}
        name="city"
        value={res?.adress?.city}
        placeholder="Postort"
      />

      <Button>Spara</Button>
    </StyledForm>
  );
};
