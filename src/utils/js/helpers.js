export const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const generateGradient = () => {
  const generateHSLColor = (hslColor) => {
    const colorStr = hslColor || '';
    const hslValues = colorStr.match(/\d+/g);
    const hue = hslValues ? random(Number(hslValues[0]) - 90, Number(hslValues[0]) + 91) : random(0, 256);
    const sat = random(50, 101);
    const lum = hslValues ? random(Number(hslValues[2]) - 33, Number(hslValues[2]) + 34) : random(10, 66);
    return ({
      str: `hsl(${hue > 360 ? 360 - hue : hue < 0 ? 360 + hue : hue}, ${sat}%, ${lum < 0 ? -lum : lum}%)`,
      hue: hue > 360 ? 360 - hue : hue < 0 ? 360 + hue : hue,
      sat: sat,
      lum: lum < 0 ? -lum : lum,
    });
  };
  const colorObj1 = generateHSLColor();
  const colorObj2 = generateHSLColor(colorObj1.str);
  const lumSort = [colorObj1, colorObj2].sort(({ lum: a }, { lum: b }) => a - b);
  const midLum = (colorObj1.lum + colorObj2.lum) / 2;
  return ({
    bg: lumSort[0].str,
    str: `linear-gradient(${random(-45, 46)}deg, ${lumSort[0].str} 0%, ${lumSort[1].str} 100%)`,
    text: midLum > 60 ? '#3a3a3a' : 'white',
  });
};

