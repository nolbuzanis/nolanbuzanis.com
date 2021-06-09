const fallbackCopyTextToClipboard = (text: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

const copyTextToClipboard = async (text: string): Promise<void> => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Async: Could not copy text: ', error);
  }
};

export default copyTextToClipboard;
