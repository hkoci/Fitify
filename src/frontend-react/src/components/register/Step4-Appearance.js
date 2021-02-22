import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import ColorPicker from 'material-ui-color-picker'


// Destructuring props
const Appearance = ({ handleNext, handleBack, handleChange, values: { primaryColour, secondaryColour, avatarColour, darkmode, highContrast, textSize}, formErrors }) => {

  // No validation required for checkboxes in this form
  const isValid = true;

  // Convert 'checked' to 'value' before performing handleChange
  const handleCheckedChange = (event) => {
    var dateEventObj = {"target": {"name": event.target.name, "value": event.target.checked} }
    handleChange(dateEventObj);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ColorPicker
            fullWidth
            name='primaryColour'
            label='primaryColour'
            defaultValue={'◼ Primary Colour'}
            value={primaryColour}
            onChange={colourVal => handleChange({"target": {"name": "primaryColour", "value": colourVal} })}
          
          />
        </Grid>

        <Grid item xs={12}>
          <ColorPicker
            fullWidth
            name='secondaryColour'
            label='secondaryColour'
            defaultValue={'◼ Secondary Colour'}
            value={secondaryColour}
            onChange={colourVal => handleChange({"target": {"name": "secondaryColour", "value": colourVal} })}
          
          />
        </Grid>

        <Grid item xs={12}> 
          <Typography id="discrete-slider" gutterBottom>
            Font Size
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
            <TextFormatIcon />
            </Grid>
            <Grid item xs>
              <Slider
                defaultValue={12}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={2}
                marks
                min={10}
                max={30}
              />
            </Grid>
            <Grid item>
            <FormatSizeIcon />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
        <FormControlLabel
              control={<Checkbox checked={darkmode} onChange={handleCheckedChange} name="darkmode" />}
              label="Dark Mode"
            />
        </Grid>

        <Grid item xs={12}>
        <FormControlLabel
              control={<Checkbox checked={highContrast} onChange={handleCheckedChange} name="highContrast" />}
              label="High Contrast"
            />
        </Grid>
        
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </>
  )
}

export default Appearance
