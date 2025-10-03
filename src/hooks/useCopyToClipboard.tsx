import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);

      // Clear after 2 seconds
      setTimeout(() => {
        setCopiedText(null);
      }, 2000);

      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  const isCopied = (text: string) => copiedText === text;

  return { copyToClipboard, isCopied };
};
