
export const redirect = (url, height = 700, width = 1000) => {
  return () => {
    const strWindowFeatures = "location=yes,height="+height+",width="+width+",scrollbars=yes,status=yes";
    let URL;
    if (url === 'mail@oleg-dudkin.com') URL = "mailto:" + url + "?Subject=The%20subject";
    else URL = url;
    window.open(URL, "_blank", strWindowFeatures);
  };
};