export function downloadFileFromGoogleDrive(link: string): void {
    // Extract the file ID from the Google Drive link
    const fileId = link.match(/[-\w]{25,}/);
  
    if (fileId) {
      // Create a temporary <a> element to trigger the download
      const linkElement = document.createElement("a");
      linkElement.href = `https://drive.google.com/uc?export=download&id=${fileId[0]}`;
      linkElement.target = "_blank";
      linkElement.style.display = "none";
  
      // Add the link element to the document
      document.body.appendChild(linkElement);
  
      // Simulate a click event to start the download
      linkElement.click();
  
      // Clean up the link element
      document.body.removeChild(linkElement);
    } else {
      console.log("Invalid Google Drive link");
    }
  }
  
  export function downloadAppFromGoogleDrive(link: string): void {
    // Extract the file ID from the Google Drive link
    const fileIdMatch = link.match(/[-\w]{25,}/);
  
    if (fileIdMatch) {
      const fileId = fileIdMatch[0];
  
      // Create a temporary <a> element to trigger the download
      const linkElement = document.createElement("a");
      linkElement.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
      linkElement.target = "_blank";
      linkElement.style.display = "none";
  
      // Add the link element to the document
      document.body.appendChild(linkElement);
  
      // Simulate a click event to start the download
      linkElement.click();
  
      // Clean up the link element
      document.body.removeChild(linkElement);
    } else {
      console.log("Invalid Google Drive link");
    }
  }
  