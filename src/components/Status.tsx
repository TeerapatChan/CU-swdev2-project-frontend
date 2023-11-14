import { Toaster } from 'react-hot-toast';

export default function Status() {
  return (
    <Toaster
      toastOptions={{
        success: {
            style: {
            border: '1px solid #0284c7',
            padding: '6px',
            color: '#0284c7',
          },
        },
        error: {
          style: {
            border: '1px solid #ef4444',
            padding: '6px',
            color: '#ef4444',
          },
        }
        
      }}
    />
  );
}
