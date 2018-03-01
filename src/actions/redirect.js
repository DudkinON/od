export const redirect = (url, height = 700, width = 1000) => {
  /**
   * Open 'url' in a new window  with 'height' (default 700) and 'width' (default 1000)
   *
   * @param url: string
   * @param height: int
   * @param width: int
   * @return function
   */
  return () => {
    const strWindowFeatures = "location=yes,height="+height+",width="+width+",scrollbars=yes,status=yes";
    let URL;
    if (url === 'mail@oleg-dudkin.com') URL = "mailto:" + url + "?Subject=The%20subject";
    else URL = url;
    window.open(URL, "_blank", strWindowFeatures);
  };
};