import React from "react";
import GutteredImageAndTextPairing from '../SpanComponents/GutteredImageAndTextPairing';
import { Typography } from '@material-ui/core';
import { ColorPalette } from '../Theme/ColorPalette'
import { HowItWorks } from '../Assets/Static/HowItWorks'
import placeholder from '../Assets/Images/placeholder-avatar.jpg'

export default function About() {
  return (
    <div style={styles.container}>
      <Typography variant="h2" style={styles.title}>CDP's Impact for You</Typography>
      <Typography variant="h4" style={styles.subtitle}>Integrating Multiple Data Sources for Seamless Search</Typography>
      {HowItWorks.aboutContentBlocks.map((contentObject, index) => {
        let avatar = contentObject.imageSrc || placeholder;
        let directionality = (index % 2 === 0); // even lines will have text on the right, image on the left. odd lines vice versa.
        return (
          <div style={{ width: "80%", minHeight: "350" }}>
            <GutteredImageAndTextPairing
              textRight={directionality}
              title={contentObject.title}
              subtitle={contentObject.subtitle}
              body={contentObject.body}
              imageSource={avatar}
            />
          </div>

        )
      })}
    </div>
  )
}

const styles={
  title: {
    marginTop: 48,
    marginBottom: 24,
    maxWidth: "50%",
    color: ColorPalette.titleTextColor,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 48,
    maxWidth: "80%",
    color: ColorPalette.subtitleTextColor,
  },
  container: {
    backgroundColor: ColorPalette.basePageColor,
    display: 'flex',
    flexDirection: "column",
    justifyContent:"center",
    alignItems: 'center'
  }
}
