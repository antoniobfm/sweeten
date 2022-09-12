import React, { useEffect } from 'react';
import { Container } from '@/styles/components/ToastContainer/Toast';

import { ToastMessage, useToast } from '../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
      <Container
        type={message.type}
        hasDescription={Number(!!message.description)}
        initial={{ bottom: '-120%', opacity: 0 }}
        animate={{ bottom: '0%', opacity: 1 }}
        exit={{ bottom: '-120%', opacity: 0 }}
      >
        <div>
          <strong>{message.title}</strong>
          {message.description && <p>{message.description}</p>}
        </div>
      </Container>
  );
};

export default Toast;
