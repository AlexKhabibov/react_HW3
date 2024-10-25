import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function TemperatureConverter() {
  const [temperatureCelsius, setTemperatureCelsius] = useState('');
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState('');
  const [degreesCelsius, setDegreesCelsius] = useState(true);

  const calculateTemperature = (e) => {
    e.preventDefault();
    if (degreesCelsius) {
      setTemperatureFahrenheit((Number.parseFloat(temperatureCelsius) * 1.8 + 32).toFixed(2));
    } else {
      setTemperatureCelsius(((Number.parseFloat(temperatureFahrenheit) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <div>
      <h2>Температура</h2>
      <TextField
        label="Цельсий"
        variant="outlined"
        fullWidth
        value={temperatureCelsius}
        onChange={(e) => {
          setTemperatureCelsius(e.target.value);
          setDegreesCelsius(true)}
        }
        margin="normal"
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        fullWidth
        value={temperatureFahrenheit}
        onChange={(e) => {
          setTemperatureFahrenheit(e.target.value);
          setDegreesCelsius(false)}
        }
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateTemperature}
        style={{ marginBottom: '20px' }}
      >Конвертировать</Button>
    </div>
  );
}

export default TemperatureConverter;