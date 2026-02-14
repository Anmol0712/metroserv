// src/components/ui/Typewriter.jsx
import { useEffect, useState } from 'react';

const Typewriter = ({ texts, delay = 1000, typingSpeed = 100, deletingSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPause, setTypingPause] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (!isDeleting && displayText.length === currentText.length) {
      // Pause at the end of typing
      if (typingPause < delay) {
        timeout = setTimeout(() => setTypingPause(prev => prev + 100), 100);
      } else {
        setIsDeleting(true);
        setTypingPause(0);
      }
    } else if (isDeleting && displayText === '') {
      // Move to next text when done deleting
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else {
      // Type or delete text
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting 
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, typingPause, texts, delay, typingSpeed, deletingSpeed]);

  return <span>{displayText}</span>;
};

export default Typewriter;