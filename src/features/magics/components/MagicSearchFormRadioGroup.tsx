import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type radioButtonProps = {
  label: string;
  value: string;
};

export type radioButtonGourpProps = {
  radioButtons: radioButtonProps[];
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MagicSearchFormRadioGroup = (props: radioButtonGourpProps) => {
  return (
    <FormControl>
      <FormLabel id="type">{props.name}</FormLabel>
      <RadioGroup
        row
        defaultValue=""
        name={props.name}
        onChange={props.handleChange}
      >
        {props.radioButtons.map((radioButton) => (
          <FormControlLabel
            key={radioButton.label}
            control={<Radio />}
            value={radioButton.value}
            label={radioButton.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
